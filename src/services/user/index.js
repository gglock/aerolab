import request from '../../utilities/request';

function me() {
  return request({
    url:    '/user/me',
    method: 'GET'
  });
}

const UserService = {
  me
}

export default UserService;
