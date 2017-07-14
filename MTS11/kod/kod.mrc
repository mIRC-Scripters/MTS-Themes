alias KOD.WHOISSTART {
  %:echo %::pre Starting whois...
  %:echo 14ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄ·
  %:echo 14³Nick15ÄÄÄÄÄÄÄÄÄÄ14×15Ä  $+ %::nick
  %:echo 14³Address15ÄÄÄÄÄÄÄ14×15Ä  $+ %::address
  %:echo 14³Realname15ÄÄÄÄÄÄ14×15Ä  $+ %::realname
}

alias KOD.WHOISEND {
  %:echo 14ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄ½
  %:echo %::pre End of whois.
}

alias dns.lookup {
  %:echo 14ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ·
  %:echo 14³DNS Request: Looking up:14º
  %:echo 14ÃÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ½
  %:echo 14³ %::address
}

alias dns.error {
  %:echo 14ÃÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ·
  %:echo 14³ Could not resolv..2.....14º
  %:echo 14ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ½
}

alias dns.resolv {
  %:echo 14³
  %:echo 14³ Resolved %::naddress ( $+ %::iaddress $+ ) to %::raddress
  %:echo 14ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄo
}

$iif($1,$style(2) • $$1 •) { }
-
information
.whois { whois $$1 }
.-
.DNS ( $+ $$1 $+ ) { dns $$1 }