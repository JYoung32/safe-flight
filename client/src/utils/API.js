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
    getToken: function (){
        axios({
            method: 'post',
            url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
            data: data
            })
            .then(function(data){
                localStorage.setItem('access_token', data.data.access_token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.access_token}`;
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
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.access_token}`;     
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

    getFlights: function (origin, destination, departure, returnDate) {
    return axios
        .get(`https://test.api.amadeus.com/v1/shopping/flight-offers?origin=${origin}&destination=${destination}&departureDate=${departure}&returnDate=${returnDate}&currency=USD`)
        .then(({ data }) => console.log(data))
        .catch(err =>console.log(err));
  }
};
