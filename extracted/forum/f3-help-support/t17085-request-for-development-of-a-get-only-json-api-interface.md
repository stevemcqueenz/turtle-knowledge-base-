---
title: "Request for Development of a GET-Only JSON API Interface"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17085"
topic_id: 17085
forum_id: 3
forum: "Help & Support"
author: "Wolfmanpaulx"
author_authority: "player"
posted: "2025-01-13T09:20:00Z"
last_post: "2025-01-14T21:19:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:47:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Request for Development of a GET-Only JSON API Interface

## Post 116549 by Wolfmanpaulx — 2025-01-13T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116549#p116549 | page 1 | era: pre-1.18.1 -->

**Request for Development of a GET-Only JSON API Interface**
---
Hi Team,
I would like to request the development of a simple ***GET-only JSON API interface*** to fetch data
from your database.
The goal is to retrieve the necessary data in JSON format using an array-like query structure for parameters.
I will then use this data in my own database and web visualization project.

 **Key Requirements**

 **1. Endpoint Design**
---

- A. Provide a single endpoint that accepts HTTP **GET** requests.
B. Query parameters should be passed as an array-like structure.
C. Input Format (Query Parameters):

Use an array structure in the **GET** query string.
Example Request:
Code: Select all

```
GET /api/fetch?query[table]=items&query[limit]=50&query[rarity]=epic
```

In this format, all parameters are nested under a **query** key, making the structure clear and extensible.

 **2. Output Format**
The response should return a JSON object with:

I. Status: Indicates success or failure ("success" or "error"). Can be even done by returning coresponding HTTP statuses like 200, 400, 401, 403.
II. Data: An array of results matching the query.
III. Message: Additional context or information about the request.

Example Response:

> {
>  "status": "success",
>  "data": [
>  {
>  "item_id": 123,
>  "name": "Sword of Azeroth",
>  "rarity": "epic"
>  },
>  {
>  "item_id": 124,
>  "name": "Shield of Eternity",
>  "rarity": "rare"
>  }
>  ],
>  "message": "Fetched 2 items successfully"
>  }

 **3. Error Handling**
---
Return meaningful error responses for invalid or incomplete queries.
 *Example Error Response:*

> {
>  "status": "error",
>  "message": "Missing required parameter: table"
>  }

 **4. Authentication (Optional)**
---
If required, implement a simple token-based authentication system for secure access, such as JWT.
Suggested Security Scheme:

> securitySchemes:
>  bearerAuth:
>  type: http
>  scheme: bearer
>  bearerFormat: JWT

 **Benefits of Array-Like Query Parameters**

By structuring the GET query parameters as an array, this approach ensures better organization and scalability,
especially when handling complex queries.

Please let me know if you need further clarification or additional details.
I’m also happy to rewrite this request into a formatted Swagger/OpenAPI document if that would help!

 **Best regards,**

## Post 116592 by Sunken — 2025-01-13T16:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116592#p116592 | page 1 | era: pre-1.18.1 -->

That has little chance to ever happen, but a few questions/suggestions. PS: I don't work for turtle.

I don't understand the benefits of this array style and your example doesn't show them, i.e. it could just be
Code: Select all

```
GET /api/fetch?table=items&limit=50&rarity=epic
```

Please, don't use JWT for such a thing. It is horrible for revocation, you need to keep checking a revocation list, and if you have to hit the DB anyway, just use a bunch of random bytes with decent entropy and avoid the pain of signatures.

## Post 116741 by Wolfmanpaulx — 2025-01-14T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116741#p116741 | page 1 | era: pre-1.18.1 -->

> **Sunken wrote: Mon Jan 13, 2025 4:22 pm**
> That has little chance to ever happen, but a few questions/suggestions. PS: I don't work for turtle.
>
>  I don't understand the benefits of this array style and your example doesn't show them, i.e. it could just be
>  Code: Select all
>
> ```
> GET /api/fetch?table=items&limit=50&rarity=epic
> ```
>
>   Please, don't use JWT for such a thing. It is horrible for revocation, you need to keep checking a revocation list, and if you have to hit the DB anyway, just use a bunch of random bytes with decent entropy and avoid the pain of signatures.

 **Thank you for your feedback and suggestions. I'll address your points in detail.**

Regarding the array-style example:
The example was intended to illustrate the structure of a publicly accessible interface that accepts HTTP GET requests with JSON headers. It was not meant to prescribe a specific implementation style. The example query:
Code: Select all

```
GET /api/fetch?table=items&limit=50&rarity=epic
```

is indeed valid and straightforward. However, in many cases, a JSON body might be preferred for more complex requests or when adhering to certain API design standards. The choice between query parameters and JSON payload depends on the use case, but both approaches can coexist.

On JWT and security:
We work extensively with JWT for security in our PHP, Python, Java (mobile), and Swift applications. It has proven effective for us in scenarios requiring stateless authentication and token-based security. That said, I understand your concerns regarding revocation. JWT can indeed complicate revocation mechanisms, especially in environments where immediate invalidation is critical.

For applications where revocation is a priority, alternative methods like random byte tokens stored in a database might be more suitable. These approaches avoid the overhead of signature verification and simplify revocation. However, JWT remains a valid choice for scenarios where its strengths—such as statelessness and payload embedding—align with the application's needs.

API Design:
The proposed interface would:
- [] Accept an HTTP GET request with JSON headers.
[] Validate incoming request data to ensure it meets the expected structure and contains valid values. For example:
 - [] Check that required parameters are present.
[] Validate parameter values matches predefined options.
[] Sanitize input to prevent SQL injection or other malicious exploits.
[] Return an HTTP status code to indicate success or failure. Optionally, the response body could include a JSON object containing:
 - [] A *status* field.
[] Additional data (e.g., fetched records, metadata).
Security Considerations:
To ensure the database and sensitive operations are protected:
- [] **Request Data Validation:** All incoming requests would be validated and sanitized before processing. This step prevents invalid or malicious data from being passed to the backend.
[] **Authentication and Authorization:** Secure the endpoint with appropriate authentication (e.g., JWT or API keys) and ensure users have the correct permissions for the requested operation.
[] **Rate Limiting:** Implement rate limiting to prevent abuse of the API.
[] **Abstraction of Database Access:** The API endpoint would handle all interactions with the database, abstracting direct access.
- **Response Design:** Avoid exposing sensitive or unnecessary information in the API responses.
- **Audit Class:** Every request and response should be recorded for further investigation. This can be implemented using a basic audit class for logging purposes.

Another important consideration is to use database drivers for faster data transportation between the database, back-end, and client, as well as for increased security. For example: Dibi.

## Post 116742 by Wolfmanpaulx — 2025-01-14T21:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116742#p116742 | page 1 | era: pre-1.18.1 -->

Anyway, If you provide public endpoints that return data, I believe there will be plenty of people willing to work on the database, talent calculators, and similar tools purely as a hobby.

