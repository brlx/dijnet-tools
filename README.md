# dijnet-tools

**WARNING / DISCLAIMER / etc**
* this is just a sandbox, probably I won't make any progress at all, so don't expect useful content here. Also expect the scope to change as I go.
* I am learning most of this right now, so also expect a lot of silly solutions
* I *might* gather some ideas from the competing solutions

This downloads your bills from dijnet.


## next steps
* [-] find out the form structure of the login form
* [-] find out how to post a form from node
* [-] find out where the session is coming back, and store it
* [-] find out 

## Usage

### Credentials

**dijnet-tools** expects your credentials as environment variables, the name should be `DIJNET_TOOLS_USER` for the username and `DIJNET_TOOLS_PASSWORD` for the password. If either of them is not found, **dijnet-tools** exits without doing anything.
I personaly have the commands for setting them stored in my password manager, combined with the `HISTCONTROL=ignorespace` bash flag, so they won't be stored in the history.
```bash
export HISTCONTROL=ignorespace  # note that the rest of the commands begin with a space
 export DIJNET_TOOLS_USER="yourusername"
 export DIJNET_TOOLS_PASSWORD="yourpassword"
```

