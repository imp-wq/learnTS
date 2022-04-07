let str1: 123 | 'right' | 'center'

str1 = 'right'

function request(url: string, method: 'GET' | 'POST') {}
const req = {
  url: 'localhost:8080',
  method: 'GET'
}

request(req.url, req.method)
