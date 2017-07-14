alias frosty.whois {
%:echo 10———————————————————————————————————————————————————————————————————————
%:echo 11 Name and address:12 %::nick 14[12 $+ %::address $+ 14]
%:echo 11 Channels:12 %::chan
%:echo 11 Server:12 %::wserver
  if (%::idletime) %:echo 11 Idle:12 %::idletime
  if (%::away) %:echo 11 Away:12 %::away
%:echo 10———————————————————————————————————————————————————————————————————————
}
raw 0:*:{ if ($event == AWAY) { haltdef } }