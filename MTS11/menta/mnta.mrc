alias whois1 {
  echo -a 7--11[14whois $2 $+ 11]7--------------------------------------    
  echo -a 7|10··9host 11[5 $+ $1 $+ 11] 
  echo -a 7|10··9name: 14 $3-
}
alias whois2 {
  echo -a 7|10··9chans: 14 $1-
}
alias whois3 {
  echo -a 7|10··9server: 14 $1
}
alias whois4 {
  echo -a 7|10··9idle: 14 $duration($1) $+ , $2-
}
alias whois7 {
 echo -a 7|10··9ircop: 14 $2 $1 an IRC Operator 
}
alias whois5 {
  echo -a 7|10··9away: 14 $1-
}
alias whois6 {
  echo -a 7--11[14end of whois11]7--------------- 
}
alias whois8 {
 echo -a 7|10··9extra: 14 the nickname $1- Registred
}
alias loaad {
 echo -s 1 $timestamp 14theme loaded 11[14written by ac-11]
}
alias unloaad {
 echo -s 1 $timestamp  14unload theme
}
alias oth {
 echo -s 9»14/NAMES list 11[14 $+ $1 $+ 11/14 $2- $+ 11]
}
alias oth2 {
 echo -a 9»14Modes 11[14 $+ $1 $+ 11/14 $2 $+ 11]
}
alias oth3 { 
 echo -a 9»14Topic 11[14 $+ $1 $+ 11/14 $2- $+ 11]
}
alias oth4 {
 echo -a 9»14Topic 11[14 $+ $1 set by $2 $+ 11/14 $3- 11]
}