alias ft.whois1 {
  %:echo -
  %:echo %::pre 12nick:11 $1 12( $+ $2 $+ )
  %:echo %::pre 12real name:11 $3-
}
alias ft.whois2 {
  %:echo %::pre 12channels:11 $1-
}
alias ft.whois3 {
  %:echo %::pre 12server:11 $1
  %:echo %::pre 12server info:11 $2-
}
alias ft.whois4 {
  if ($1-) %:echo %::pre 12away:11 $1-
}
alias ft.whois5 {
  if ($1-) %:echo %::pre 12idle time:11 $duration($1) , 12sign on:11 $2-
}
alias ft.whois6 {
  %:echo %::pre 12end of whois:11 $1-
  %:echo -
}
