alias ft.whois1 {
  %:echo -
  %:echo %::pre 12nick:11 $1 12( $+ $2 $+ )
  %:echo %::pre 12real name:11 $3-
}
alias ft.whois2 {
  %:echo %::pre 12channels:11 $1-
}
alias ft.whois3 {
  %:echo %::pre 12server:11 $1
  %:echo %::pre 12server info:11 $2-
}
alias ft.whois4 {
  if ($1-) %:echo %::pre 12away:11 $1-
}
alias ft.whois5 {
  if ($1-) %:echo %::pre 12idle time:11 $1 , 12sign on:11 $2-
}
alias ft.whois6 {
  %:echo %::pre 12end of whois:11 $1-
  %:echo -
}
