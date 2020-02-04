import axios from "axios";
import qs from "qs";

const clientID = process.env.REACT_APP_clientId;
const secret = process.env.REACT_APP_secret;

//if the access token exists get the 

let data = {

    "grant_type":"client_credentials",
    "client_id": clientID,
    "client_secret": secret
        
}
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
            .then(function(data){
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

    getFlights: function () {
    return axios
        .get("https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2020-10-01&max=2")
        .then(({ data: { results } }) => console.log(results))
        .catch(err =>console.log(err));
  }
};