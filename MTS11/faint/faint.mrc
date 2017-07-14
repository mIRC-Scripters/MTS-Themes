alias faint.load echo -at 12faint theme v1.3 by 12sreid, http://www.ciphering.net/
alias whois.start {
  %:echo 12ÚÄÄÄÄÄÄÄÄÄ12¿
  %:echo ³ 12whois ÿÿ³
  %:echo ÃÄÄÄÄÄÄÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ12ÄÄÄÄÄÄ ÄÄÄÄ ÄÄÄ ÄÄ Ä Ä
  %:echo ³ÿÿ12Nick:ÿÿ³ %::nick
  %:echo ³ÿÿ12Name:ÿÿ³ %::realname
  %:echo ³ÿÿ12Addy:ÿÿ³ %::address

}
alias whois.end {
  %:echo ÃÄÄÄÄÄÄÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ12ÄÄÄÄÄÄ ÄÄÄÄ ÄÄÄ ÄÄ Ä Ä
  %:echo ³ 12/whois ÿ³
  %:echo 12ÀÄÄÄÄÄÄÄÄÄ12Ù
}
alias whois.chan %:echo ³ÿÿ12Chan:ÿÿ³ %::chan
alias whois.serv %:echo ³ÿÿ12Serv:ÿÿ³ %::wserver - %::serverinfo
alias whois.away %:echo ³ÿÿ12Away:ÿÿ³ %::away
alias whois.idle %:echo ³ÿÿ12Idle:ÿÿ³ $ut($gettok(%::text,1,32)) - sign on time12: $ut2(%::signontime)
alias whois.stat %:echo ³ÿÿ12Stat:ÿÿ³ %::text
alias whois.type %:echo ³ÿÿ12Type:ÿÿ³ %::text
alias ut return $replace($duration($$1),secs,12s,mins,12m,sec,12s,min,12m,hrs,12h,hr,12h)
alias ut2 return $gettok($1-,2-,32)
