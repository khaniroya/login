import { UserData } from "@/Types/type";
import axios from "axios";


export const getUserInformation = async (data: UserData) => {
    const { password, username } = data;
    axios.post('https://sso.entekhabgroup.com/resources/test/account/en', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'password',
            client_id: 'account-console',
            username: username,
            password: password,
            scope: 'openid'
        })
    })
        .then(response => {
            const data = response.data;
            if (data.access_token) {
                const token = data.access_token;

                // Get user information
                axios.get('https://sso.entekhabgroup.com/realms/test/account/?userProfileMetadata=true', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                    .then(response => {
                        // Return user info
                        return response.data
                    })
                    .catch(error => {
                        console.log('Error getting user info: ' + error.message);
                    });
            } else {
                console.log('Failed to get access token');
            }
        })
        .catch(error => {
            console.log('Error: ' + error.message);
        });
};


export const getLoginInformation = async (token: any) => {
    return await axios.get('https://sso.entekhabgroup.com/realms/test/protocol/openid-connect/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
}