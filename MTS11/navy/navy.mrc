alias default.whoisinit {
  %:echo 2•1 Whois on2 $1
  %:echo 2•1 Name:2 $3-
  %:echo 2•1 Address:2 $2
}
alias default.whoisidle {
  %:echo 2•1 Idle:2 $duration($1)
  %:echo 2•1 Sign on:2 $2-
}
alias default.whoisend {
  %:echo 2•1 End of whois
}
alias default.lusersinit {
  %:echo 2•1 Lusers:
  %:echo 2•1 Users:2 $1 01Invisible:2 $2 01Servers:2 $3
}
alias default.lusersend {
  %:echo 2•1 01Clients:2 $1 01Servers:2 $2
  %:echo 2•1 End of lusers
}
