alias irssi.whois {
  %:echo 00-04!00- %::nick 05[ %::address ] 
  %:echo 00-04!00-  ircname : %::realname
  if (%::chan) %:echo 00-04!00-  channels : %::chan
  if (%::away) %:echo 00-04!00-  away : %::away
  if (%::wserver) %:echo 00-04!00-  server : %::wserver 
  %:echo 00-04!00- End of WHOIS
}
