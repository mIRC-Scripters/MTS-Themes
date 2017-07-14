alias show.topic %:echo  ›› Topic: $iif(%::text,$ifmatch,no topic is set)
alias main.modes %:echo  ›› Modes: $iif($len(%::text) <= 1,no modes,%::text)
alias main.users %:echo  ›› Users: $+(Ops:,$nick(%::chan,0,o,rvh)) $+(Voiced:,$nick(%::chan,0,v,roh)) $+(Regular:,$nick(%::chan,0,r,ovh)) $+(Total:,$nick(%::chan,0))
alias chan.created %:echo  ›› Created: %::pre $+($asctime(%::text,ddd mmm dd yyyy h:nn tt))
alias carbon.load %:echo %::pre Carbon Theme v1.0 Loaded
alias carbon.unload %:echo %::pre Carbon Theme v1.0 UnLoaded
alias carbon.whowas %:echo $+($str($chr(160),3),%::pre) Whowas: %::nick ( $+ %::c1 $+ %::address $+ ) %::rname
alias carbon.whois1 { 
  var %x = Whois: %::nick ( $+ %::c1 $+ %::address $+ ) %::rname, %y = $str(-,$len(%x))
  hadd -m carbon.whois line %y
  %:echo $str($chr(160),3) %y
  %:echo $str($chr(160),3) Whois: %::nick %::address %::rname
}
alias carbon.whois2 %:echo $str($chr(160),13) $+(-,$chr(155)) Channels: %::chan
alias carbon.whois3 %:echo $str($chr(160),13) $+(-,$chr(155)) Server: %::wserver %::serverinfo
alias carbon.whois4 $iif(%::away,%:echo $str($chr(160),13) $+(-,$chr(155)) Away: %::away)
alias carbon.whois5 %:echo $str($chr(160),13) $+(-,$chr(155)) Registered: %::isregd
alias carbon.whois6 %:echo $str($chr(160),13) $+(-,$chr(155)) IRCop: %::isoper %::operline
alias carbon.whois7 %:echo $str($chr(160),13) $+(-,$chr(155)) Idle/signon: $duration(%::idletime) \ %::signontime
alias carbon.whois8 {
  %:echo $str($chr(160),3) End of /whois %::nick
  %:echo $str($chr(160),3) $hget(carbon.whois,line)
}
alias carbon.onjoin %:echo $str($chr(160),2) -›  Joins: $+ %::c1 %::nick $+  %::pre ( $+ %::c1 $+ %::address $+ )
alias carbon.onpart %:echo $str($chr(160),2) ‹-  Parts: $+ %::c1 %::nick $+  %::pre ( $+ %::c1 $+ %::address $+ ) $iif(%::text,$ifmatch)
alias carbon.onmode %:echo $str($chr(160),6) Mode: $+(,14,%::cmode,,%::c1,%::nick,) %::pre sets mode: %::modes %::pre ( $+ %::chan $+ )
alias carbon.onnick %:echo $str($chr(160),6) Nick Change: ( $+ %::c1 $+ %::nick $+ ) %::pre ( $+ %::c1 $+ %::address $+ ) is now known as ( $+ %::c1 $+ %::newnick $+ )
alias carbon.kick %:echo $str($chr(160),6) Kick: $+ %::c1 %::nick $+  kicks  $+ %::c1 %::knick $+  %::pre  $+ %::c1( $+(,%::text,)  $+ %::c1) ( $+ %::chan $+ )
alias carbon.onquit %:echo $str($chr(160),6) Quits: $+ %::c1 %::nick $+  %::pre ( $+ %::c1 $+ %::address $+ ) %::pre  $+ %::c1 ( $+(,%::text,)  $+ %::c1 )
