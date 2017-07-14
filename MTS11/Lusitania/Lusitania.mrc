alias lusitania.setmode { 
  var %x = $gettok(%::modes,2-,32), %y = $instok(%::modes, $+ %::c3,2,32) $+ 
  return $iif(!%x,%::modes,%y)
}
alias lusitania.chan return $replace(%::chan,$chr(35),$+(,%::c2,$chr(35),))
alias lusitania.address return $+(,%::c2) $+ ( $+ %::address $+  $+ %::c2 $+ )
alias lusitania.pre2 return $+(,%::c3,$chr(32),•,$chr(32),)
alias lusitania.chan.text %:echo $chr(160)  $+ %::c1 $+ • $+   $+ %::cmode $+  $+ %::nick $+(,,%::c1,›,,) %::text
alias lusitania.query.text %:echo $chr(160) $+(,%::c1,•,,$chr(160),%::nick,$chr(160),,,%::c1,›,,) %::text
alias lusitania.chan.action %:echo $chr(160) $+(,%::c1,!,,$chr(160),,%::cmode,,%::nick,$chr(160)) %::text
alias lusitania.chan.actionself %:echo $chr(160) $+(,%::c1,!,,$chr(160),,%::cmode,,%::me,$chr(160)) %::text
alias lusitania.query.action %:echo $chr(160) $+(,%::c1,!,,%::nick,$chr(160)) %::text
alias lusitania.query.selfaction %:echo $chr(160) $+(,%::c1,!,,%::me,$chr(160)) %::text
alias lusitania.invite %:echo $str($chr(160),2) $+(,%::c1,,-,$chr(155),,,$chr(160)) Invite: $+(,%::c3,%::nick,) $lusitania.address invites you to join $+(,%::c1,$lusitania.chan,)
alias lusitania.notice %:echo $str($chr(160),2) $+(,%::c1,,-,$chr(155),,,$chr(160)) Notice: $+(,%::c3,%::nick,) %::text
alias lusitania.noticeself %:echo $str($chr(160),2) $+(,%::c1,,-,$chr(155),,,$chr(160)) Notice to $+(,%::c3,%::nick,) $+ : %::text
alias lusitania.noticechan %:echo $str($chr(160),2) $+(,%::c1,,-,$chr(155),,,$chr(160)) Notice to $lusitania.chan from $+(,%::c3,%::nick,) $+ : %::text
alias lusitania.noticeself.chan %:echo $str($chr(160),2) $+(,%::c1,,-,$chr(155),,,$chr(160)) Notice to $lusitania.chan $+ : %::text
alias lusitania.textmsg %:echo $str($chr(160),2) $+(,%::c3,,-,$chr(155),,,$chr(160)) Message from $+(,%::c3,%::nick,) $+ : %::text
alias lusitania.textmsg.self %:echo $str($chr(160),2) $+(,%::c3,,-,$chr(155),,,$chr(160)) Message to $+(,%::c3,%::target,) $+ : %::text
alias lusitania.show.topic %:echo $lusitania.pre2  $+ %::nick $+  sets Topic to: $iif(%::text,$ifmatch,no topic is set)
alias lusitania.main.modes %:echo $lusitania.pre2 Modes: $iif($len(%::text) <= 1,no modes,%::text)
alias lusitania.main.users %:echo $lusitania.pre2 Users: $+(Ops:,$nick(%::chan,0,o,rvh)) $+(Voiced:,$nick(%::chan,0,v,roh)) $+(Regular:,$nick(%::chan,0,r,ovh)) $+(Total:,$nick(%::chan,0))
alias lusitania.chan.created { 
  %:echo $lusitania.pre2 Created: $+($asctime(%::text,ddd mmm dd yyyy h:nn tt))
  %:echo $lusitania.pre2
}
alias lusitania.setby %:echo $lusitania.pre2 Set by $+(,%::c3,%::nick,) on %::text
alias lusitania.load %:echo %::pre Lusitania Theme Loaded
alias lusitania.unload %:echo %::pre Lusitania Theme UnLoaded
alias lusitania.whowas %:echo $+($str($chr(160),3),%::pre) Whowas: %::nick ( $+ %::c3 $+ %::address $+ ) %::rname
alias lusitania.whois1 { 
  %:echo $chr(160)
  %:echo $str($chr(160),2) %::pre  $+ %::c3 $+ Whois: %::nick $lusitania.address %::rname
}
alias lusitania.whois2 %:echo $str($chr(160),13) $+(,%::c1,,-,$chr(155),,)  $+ %::c3 $+ Channels: $lusitania.chan
alias lusitania.whois3 %:echo $str($chr(160),13) $+(,%::c1,,-,$chr(155),,)  $+ %::c3 $+ Server: %::wserver %::serverinfo
alias lusitania.whois4 $iif(%::away,%:echo $str($chr(160),13) $+(,%::c1,,-,$chr(155),,)  $+ %::c3 $+ Away: %::away)
alias lusitania.whois5 %:echo $str($chr(160),13) $+(,%::c1,,-,$chr(155),,)  $+ %::c3 $+ Registered: %::isregd
alias lusitania.whois6 %:echo $str($chr(160),13) $+(,%::c1,,-,$chr(155),,)  $+ %::c3 $+ IRCop: %::isoper %::operline
alias lusitania.whois7 %:echo $str($chr(160),13) $+(,%::c1,,-,$chr(155),,)  $+ %::c3 $+ Idle $+ %::c2 $+ / $+ %::c3 $+ signon: $duration(%::idletime) $+  $+ %::c2 $+ / %::signontime
alias lusitania.whois8 {
  %:echo $str($chr(160),2) %::pre  $+ %::c3 $+ End of  $+ %::c2 $+ / $+ %::c3 $+ whois %::nick
  %:echo $chr(160)
}
alias lusitania.joinself {
  %:echo %::pre Now talking in $lusitania.chan %::pre
  %:echo $lusitania.pre2
}
alias lusitania.onjoin %:echo $str($chr(160),2) $+(,%::c2,,-,,%::c3,$chr(155),,)  Joins: $+ %::c3 %::nick $+  $lusitania.pre2 $lusitania.address
alias lusitania.onpart %:echo $str($chr(160),2) $+(,%::c3,,$chr(139),,%::c2,-,,)  Parts: $+ %::c3 %::nick $+  %::pre $lusitania.address $iif(%::text,$ifmatch)
alias lusitania.onmode %:echo $str($chr(160),6) Mode: $+(,%::c3,%::nick,) %::pre sets mode: $lusitania.setmode %::pre ( $+ $lusitania.chan $+ )
alias lusitania.onnick %:echo $str($chr(160),6) Nick Change: ( $+ %::c3 $+ %::nick $+ ) %::pre $lusitania.address is now known as ( $+ %::c3 $+ %::newnick $+ )
alias lusitania.nickself %:echo $str($chr(160),6) You are now $+(,%::c3,%::newnick,) %::pre
alias lusitania.kick %:echo $str($chr(160),6) Kick: $+(,%::c3,%::nick,) kicks $+(,%::c3,%::knick,) %::pre %::text %::pre ( $+ $lusitania.chan $+ )
alias lusitania.kickself %:echo %::pre You were kicked from $lusitania.chan by $+(,%::c3,%::nick,) %::pre %::text %::pre
alias lusitania.onquit %:echo $str($chr(160),6) Quits: $+ %::c3 %::nick $+  $lusitania.pre2 $lusitania.address $lusitania.pre2 %::text
alias lusitania.403 %:echo %::pre No such channel: $lusitania.chan
alias lusitania.ctcp %:echo $str($chr(160),2) $+(,%::c1,,-,$chr(155),,,$chr(160)) CTCP $+(,%::c1,,-,$chr(155),,) $+(,%::c3,%::nick,) %::pre $+(,%::c3,%::ctcp,) %::pre %::text
alias lusitania.ctcpreply %:echo $str($chr(160),2) $+(,%::c1,,-,$chr(155),,,$chr(160)) CTCP $+(,%::c1,,-,$chr(155),,) $+(,%::c3,%::nick,) %::pre $+(,%::c3,%::ctcp,) %::pre Reply: %::pre %::text
