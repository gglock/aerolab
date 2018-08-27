import request from '../../utilities/request';

function get() {
  return request({
    url:    '/products',
    method: 'GET'
  });
}

const ProductService = {
  get
}

export default ProductService;
