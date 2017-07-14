alias revenge.whois {
  %:echo 7 × × × × × × × × × × × × × × × × 
  %:echo %::pre 11Whois report for %::nick ( $+ %::realname $+ 11)
  %:echo %::pre 11Address:11 $replace(%::address,@,00@11,.,00.11,~,00~11,-,00-11)
  if (%thm.ownip) { %:echo %::pre 11Real host:11 $replace($gettok($ifmatch,1,32),@,00@11,.,00.11,~,00~11,-,00-11) ( $+ $replace($gettok($ifmatch,2,32),.,00.11) $+ 11) }
  if ($q.net) && (%thm.auth) { %:echo %::pre 11Auth:11 $ifmatch }
  if (%::operline) { %:echo %::pre 11Status:11 IRC Operator }
  if (%::chan) { %:echo %::pre 11Channels:11 $replace(%::chan,$chr(35),$+(00,$chr(35),11)) }
  if (%::wserver) { %:echo %::pre 11Server:11 %::wserver $+ 00,11 %::serverinfo }
  if (%::away) { %:echo %::pre 11Away:11 %::away }
  if (%::idletime) { %:echo %::pre 11Idle:11 $duration(%::idletime) $+ 00,11 signed on $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo 7 × × × × × × × × × × × × × × × × 
  unset %thm.auth %thm.ownip
}
alias revenge.whowas {
  %:echo 7 × × × × × × × × × × × × × × × ×
  %:echo %::pre 11Whowas report for ( $+ %::nick $+ 11)
  %:echo %::pre 11Address:11 $replace(%::address,@,00@11,.,00.11,~,00~11,-,00-11)
  %:echo %::pre 11Name:11 %::realname
  if (%::wserver) { %:echo %::pre 11Server:11 %::wserver }
  if (%::serverinfo) { %:echo %::pre 11Quit:11 $asctime($ctime(%::serverinfo),dddd00 $+ $chr(44) 11mmm dd yyyy00 $+ $chr(44) 11HH:nn:ss) }
  %:echo 7 × × × × × × × × × × × × × × × ×
}
alias nn.tsd { return $+(11,$chr(40),,$1-,11,$chr(41)) }
alias nn.tgt { return $+(11,$left($1-,-1),,$right($1-,1),11) }
alias nn.tgtd { return $+(11,$left($1-,-1),,$right($1-,1),:11) }
alias nn.linesep { return 11 × × × × × × × × × × × × × × × × }
