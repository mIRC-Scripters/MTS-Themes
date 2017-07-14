alias whois1 {
  echo -a  13ÚÄÄÄ´/whois $1ÃÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ ÄÄÄ ÄÄÄÄ Ä
  echo -a  13Ã 6ù host:12 $2 
  echo -a  13Ã 6ù name:12 $3-
}
alias whois2 {
  echo -a  13Ã 6ù chans:12 $1-
}
alias whois3 {
  echo -a  13Ã 6ù server:12 $1
}
alias whois4 {
  echo -a  13Ã 6ù idle:12 $duration($1) $+ , $2-
}
alias whois7 {
 echo -a  13Ã 6ù ircop:12 $2 $1 an IRC Operator 
}
alias whois5 {
  echo -a  13Ã 6ù away:12 $1-
}
alias whois6 {
  echo -a  13ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´End of whoisÃÄÄÄ ÄÄÄ ÄÄ
}
alias whois8 {
 echo -a  13Ã 6ù extra:12 the nickname $1- registred
}
alias names {
 echo $1 6/NAMES list  $2 $+ :12  $3-
}
alias mod {
 echo -a 6joining:12 $1
}