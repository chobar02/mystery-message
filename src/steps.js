//Day first 7 May 2024
/**
1. Mastering ZOD 
- created the next js project 
- created models for varification and for backend using mongoose (User, Message)
- instalL ZOD ---
- zod will validate data fetched from user before saving to mongoose

8 May 
2. Connect backend
- some precuations are there 
- we will make lib folder and in that folder we will connenct our database

8-9 May
3. Email Verification
- we will use resend to send emails
- configure resend in lib file
- react-email to make template of email
- made api response to send response
- that's it with our setup now write api 
- we have registered user and sent the verifictation code 

10 may
4. Next auth js
- credentials based login 
- modified token and session 
- middleware
- for testing session provider set

11 may 
5 otp verification and unique username
- we made a route that check if entered username is available
- made a route that checks if a verification code is correct by matching it with the code we have give user

13 may 
6. Message Api with aggregation api
- a post request to toggle message acceptance status 
- and a get request to get message acceptance status
- we have used session to know the logged in user

- aggregation pipeline to get user messages 
- used unwind and group too.

- a route that get message and pushes that message in user message array

14 may
7. Api Intingration 
- vercel ai,
- we have a prompt we will ask ai to generate messages based on the prompt

14 May 
8. React hook form , shadcn , debouncing 
- set up shadcn 
- we will user react hook form from shadcn
- we are using axios to make requests
- we make isLoding , isChecking, isSubmitting manually
- zod to verify form

- checking the username if it is unique or not
- for debouncing we used a library

- configured form with zod resolver
- made a function when we submit our data 
- now make form step by step from shad cn


15 may - 
- otp verification

16 may 
sign in user with next auth

16 may 
Navbar and Message card
- made navbar 
- learned how to get access of session and use it
- how to sign out
- Message card

17 may 
Dashboard 
- optimistic ui
- for toggle the accept messages status we have user use form to maintian consistency
 */