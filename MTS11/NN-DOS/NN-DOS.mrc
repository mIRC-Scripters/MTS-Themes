alias dos.whois {
  %:echo ---
  %:echo %::pre Whois reply for %::nick
  %:echo %::pre Address= $+ %::address
  if (%thm.ownip) { %:echo %::pre Real Address= $+ $remove($ifmatch,$chr(32)) }
  if ($q.net) && (%thm.auth) { %:echo %::pre Auth= $+ $ifmatch }
  if (%::operline) { %:echo *operator }
  if (%::chan) { %:echo %::pre Channels= $+ %::chan }
  if (%::wserver) { %:echo %::pre Server= $+ %::wserver $+ , %::serverinfo }
  if (%::away) { %:echo %::pre Away= $+ %::away }
  if (%::idletime) { %:echo %::pre Idle= $+ $duration(%::idletime) $+ , Signed on= $+ $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo ---
  unset %thm.auth %thm.ownip
}
alias dos.whowas {
  %:echo ---
  %:echo %::pre Whowas report for %::nick
  %:echo %::pre Address= $+ %::address
  %:echo %::pre Name= $+ %::realname
  if (%::wserver) { %:echo %::pre Server= $+ %::wserver }
  if (%::serverinfo) { %:echo %::pre Quit= $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
  %:echo ---
}
alias nn.tsd { return $1- }
alias nn.tgt { return $1- }
alias nn.tgtd { return C:\ $1- }
alias nn.linesep { return $+(,$color(back),:p) }