import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8iAQvO6hWyB9fCDAWFnVyJYdY23jdxgaqNQPhdYbYxZcHZEc2ntrWn7a5Vnz95vWaSFizKQGkBaCYiTUT29JnAbSK3VXquvCh70k-bXB29ansthnJNOc6iBptp7YXXYx'
    }
})