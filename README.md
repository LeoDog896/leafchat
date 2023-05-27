# leafchat
simple, anonymous, deployable chat service over deno deploy

## design
- names can only be alphanumeric, with a min length of 1 and a max length of 16
- when a person submits their name, they are given a token that is stored in a cookie. this token expires after 24 hours, but gives enough time to validate a user for a bit