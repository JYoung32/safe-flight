//importing dependencies
import axios from "axios";
import qs from "qs";

//setting up environment variables
const clientID = process.env.REACT_APP_API_KEY;
const secret = process.env.REACT_APP_API_SECRET; 

//setting up our axios header information
let data = {
    "grant_type":"client_credentials",
    "client_id": clientID,
    "client_secret": secret        
}

//using qs library to stringify our header information
data = qs.stringify(data);

export default {
    //Amadeus
    getToken: function (){
        axios({
            method: 'post',
            url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
            data: data
            })
            .then(function(data){
                localStorage.setItem('access_token', data.data.access_token);
                return 'done'
            })
            .catch(function(err){
                return err
            })
    },
    
    //Amadeus
    validateToken: function(cb){
        const access_token = localStorage.getItem('access_token');
        if(access_token){
            axios({
                method: 'GET',
                url: 'https://test.api.amadeus.com/v1/security/oauth2/token/' +access_token
            })
            .then(function(data){
                if(data.data.state !== 'approved'){
                    this.getToken();
                } else {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.access_token}`;
                cb('done')
            }})
            .catch(function(err){
                cb(err)
            })
        }else{
            this.getToken();
            cb('done');
        }
    },

    registerUser: function (payload, history) {
        axios.post("/auth/register", payload)
        .then(data => {
            console.log('successful post', data);
            localStorage.setItem('login_token', data.data.token);
            history.push('/flights');
        })
        .catch(err => console.log(err));
    },

    loginUser: function (payload, history) {
        axios.post("/auth/login", payload)
        .then(data => {
            console.log(data);
            localStorage.setItem('login_token', data.data.token);
            // joe what page do you want to go to after this is done?
            axios({
                method:'GET',
                url: '/auth/isLoggedInTest',
                headers:{
                    common:{
                        "login_token" : localStorage.getItem('login_token')
                    }
                }
            })
              .then(data => {
                console.log('proof that youre lgoged in', data);
                history.push('/flights');
              });

        })
        .catch(err => console.log(err));
    },

    getFlights: function (origin, destination, departure, returnDate) {
    return axios({
            method:'GET',
            url: `https://test.api.amadeus.com/v1/shopping/flight-offers?origin=${origin}&destination=${destination}&departureDate=${departure}&returnDate=${returnDate}&currency=USD`,
            headers:{
                common:{
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }
        })
    },

    // getHotel: function (destination, departure, returnDate) {
    //     return axios({
    //         method:'GET',
    //         url: `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${destination}&checkInDate=${departure}&checkOutDate=${returnDate}&radius=100&radiusUnit=KM`,
    //         headers:{
    //             common:{
    //                 Authorization: 'Bearer ' + localStorage.getItem('access_token')
    //             }
    //         }
    //     })
    // }
}