alias th.whois {
  %:echo 0-
  %:echo 0::::::::::::::::7:::::0whois-start7:::::0::::::::: 10: 7:: 15.
  %:echo 0:: 0nick 0»15»10 %::nick
  %:echo 0:: 0name 0»15»10 %::realname
  %:echo 0:: 0chan 0»15»10 %::chan
  %:echo 0:: 0serv 0»15»10 %::wserver
  if (%::text) %:echo 0:: 0away 0»15»10 %::text
  if (%::idletime) %:echo 0:: 0idle 0»15»10 $duration(%::idletime)
  %:echo 0::::::::::::::::::::7:::::0whois-end7:::::0::::::::: 15: 7:: 10.
  %:echo 0-
}