alias default.load {
set %sirc.theme.scheme $1
%:echo 13::: Theme name:00 siRC default (scheme: 13 $+ %sirc.theme.scheme $+ 00)
}
alias default.whoisinit {
  %:echo 13::: /whois: $1
  %:echo | 13Fullname: $3-
  %:echo | 13Address: $2
}
alias default.whoisidle {
  %:echo | 13Idle: $duration($1)
  %:echo | 13Sign On: $2-
}
alias default.whoisend {
  %:echo 13::: end of /whois
}
alias default.lusersinit {
  %:echo 13::: Lusers:00 $1 user(s) on $2 server(s)
}
alias default.lusersend {
  %:echo 13::: Lusers:00 $1 user(s) on $3 server(s)
}
alias default.topicinit {
  %:echo 13:x: Topic:00 $iif($1-,$1-,no topic set)
}
alias default.mode {
  %:echo 13:x: Modes:00 $iif($len($1) <= 1,no modes set,$1-)
}
alias default.users {
  set -un %:echo echo $1
  %:echo 13:x: Users: 00[13 13Ops: 00 $+ $nick($1,0,o,rvh) 13Voiced: 00 $+ $nick($1,0,v,roh) 13Regular: 00 $+ $nick($1,0,r,ovh) 13Total: 00 $+ $nick($1,0) 00]
}
alias default.adminend {
  %:echo 13|00 $1-
  %:echo 13::: end of /admin
}
