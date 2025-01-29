import { http, HttpResponse } from "msw"
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('http://localhost:5000/admin', async({request}) => {
    const body = await request.json()
    return HttpResponse.json({
      id: Date.now(),
      comment: body.text,
    })
  }),
];