alias w.init {
  echo -at ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿
  echo -at ³04whois ÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ       
  echo -at ³ 00user Ã12 $1 (11 $+ $2 $+ 12) 
  echo -at ³ 00name Ã12 $3-
}

alias w.chan {
  echo -at ³ 00chan Ã12 $1-
}

alias w.server {
  echo -at ³ 00serv Ã12 $1
}

alias w.idle {
  echo -at ³ 00idle Ã12 $duration($1)
}

alias w.away {
  echo -at ³ 00away Ã12 $1-
}

alias w.end {
  echo -at ÚÄÄÄÄÄÄÙ
  echo -at Ã(00End of whois)
}
