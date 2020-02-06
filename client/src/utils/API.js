import axios from "axios";
import qs from "qs";

const clientID = process.env.REACT_APP_API_KEY;
const secret = process.env.REACT_APP_API_SECRET;

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

    //returning as undefined
    getFlights: function (origin, destination, departure, returnDate) {
    return axios
        .get(`https://test.api.amadeus.com/v1/shopping/flight-offers?origin=${origin}&destination=${destination}&departureDate=${departure}&returnDate=${returnDate}&currency=USD`)
        .then(({ data }) => console.log(data))
        .catch(err =>console.log(err));
<<<<<<< HEAD
  },

//   testFlights: function () {
//     return axios
//         .get(`https://test.api.amadeus.com/v1/shopping/flight-offers?origin=EWR&destination=LAX&departureDate=2020-02-14&returnDate=2020-02-21&currency=USD&nonStop=true&max=10`)
//         .then(({ data }) => console.log(data.data))
//         .catch(err =>console.log(err));
//   }
};
=======
  }
};

//api year format yyyy/mm/dd

// getFlights: function (origin, destination, departure) {
//     return axios
//         .get(`https://test.api.amadeus.com/v1/shopping/flight-offers?origin=${origin}&destination=${destination}&departureDate=${departure}`)
//         .then(({ data: { results } }) => console.log(results))
//         .catch(err =>console.log(err));
//   }
>>>>>>> 201b7c5239136d71c9b589b8801d28b86a9f46a3
