Alias ultra.whois {
  %:echo 2ÚÄÄÄÄÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ---úú ú
  %:echo 2³11Whois2³ 12 $+ %::nick $+([14,%::address,12])
  %:echo 2³2ÄÄÄÄÄÙ 10 $+ %::realname
  if (%::chan) { %:echo 2³10 Channels:11 %::chan }
  %:echo 2³10 Server:11 %::server
  if (%::idletime) { %:echo 2³10 Idle for:11 %::idletime }
  if (%::away) { %:echo 2³10 Away: %away }
  if (%::isoper == is) { %:echo 2³10 &nick 11 $+ %::isoper $+ 10 an IRC operator. }
  %:echo 2ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ---úú ú
}
