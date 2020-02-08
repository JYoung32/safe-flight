//importing dependencies
import axios from "axios";
import qs from "qs";

//setting up environment variables
const clientID = process.env.REACT_APP_API_KEY;
const secret = process.env.REACT_APP_API_SECRET; 
const AMADAEUS = "AMADAEUS";
const DESTEST = "DestEst";

//setting up our axios header information
let data = {
    "grant_type":"client_credentials",
    "client_id": clientID,
    "client_secret": secret        
}

//using qs library to stringify our header information
data = qs.stringify(data);

const setHeaders = (api) =>{
    switch(api){
        case AMADAEUS:
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
            delete axios.defaults.headers.common['login_token'];
        case DESTEST:
            axios.defaults.headers.common['login_token'] = localStorage.getItem('login_token');
        default:
    }
}

export default {
    getToken: function (){
        axios({
            method: 'post',
            url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
            data: data
            })
            .then(function(data){
                localStorage.setItem('access_token', data.data.access_token);
                setHeaders(AMADAEUS);
                return 'done'
            })
            .catch(function(err){
                return err
            })
    },
    
    validateToken: function(cb){
        const access_token = localStorage.getItem('access_token');
        if(access_token){
            axios.get('https://test.api.amadeus.com/v1/security/oauth2/token/'  +access_token)
            .then((data) => {
                if(data.data.state !== 'approved'){
                    this.getToken();
                }else{
                    setHeaders(DESTEST);    
                }
                cb('done')
            })
            .catch(function(err){
                cb(err)
            })
        }else{
            this.getToken();
            cb('done');
        }
    },

    registerUser: function (payload) {
        axios.post("/auth/register", payload)
        .then(console.log('successful post'))
        .catch(err => console.log(err));
    },

    loginUser: function (payload, history) {
        axios.post("/auth/login", payload)
        .then(data => {
            console.log(data);
            localStorage.setItem('login_token', data.data.token);
            // setHeaders(DESTEST);
            // joe what page do you want to go to after this is done?
        
            axios.get('/auth/isLoggedInTest')
              .then(data => {
                console.log('proof that youre lgoged in', data);
                history.push('/flight');
              });

        })
        .catch(err => console.log(err));
    },

    getFlights: function (origin, destination, departure, returnDate) {
        setHeaders(AMADAEUS);
    return axios
        .get(`https://test.api.amadeus.com/v1/shopping/flight-offers?origin=${origin}&destination=${destination}&departureDate=${departure}&returnDate=${returnDate}&currency=USD`)
        .then(({ data }) => console.log(data))
        .catch(err =>console.log(err));
    },

    getHotel: function (destination, departure, returnDate) {
        setHeaders(AMADAEUS);
        return axios
            .get(`https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${destination}&checkInDate=${departure}&checkOutDate=${returnDate}&radius=100&radiusUnit=KM`)
            .then(({ data }) => console.log(data))
            .catch(err =>console.log(err));
    }
}