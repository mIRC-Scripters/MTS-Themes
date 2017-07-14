alias nexus.join %:echo $+(,%::c1,-,,%::c3,-,,%::c1,-) $+(,%::c3,Created on) $+(,%::c1,:) $replace($asctime(%::text,dddd $+ $chr(44) mmmm dd hh:nn:sstt),$chr(44),$+(,%::c1,,$chr(44),),$chr(58),$+(,%::c1,,$chr(58),))
alias nexus.lusersstart {
  %:echo $+(,%::c2,$chr(91),,%::c3,/lusers,$chr(32),,%::c1,%::server,,%::c2,$chr(93),$str(—,35))
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Users,) $+(,%::c1,:,) $+(,%::c3,%::users)
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Invisible,) $+(,%::c1,:,) $+(,%::c3,%::invisible)
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Servers,) $+(,%::c1,:,) $+(,%::c3,%::value)
}
alias nexus.lusersend {
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Local Clients,) $+(,%::c1,:,) $+(,%::c3,%::users)
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Leaves,) $+(,%::c1,:,) $+(,%::c3,%::value)
  %:echo $+(,%::c2,$chr(91),,%::c3,/lusers,$chr(32),,%::c1,%::server,,%::c2,$chr(93),$str(—,35))
}
alias nexus.namesstart {
  if (!%nexus.names) { 
    %:echo $+(,%::c2,$chr(91),,%::c3,/names,$chr(32),,%::c1,%::chan,,%::c2,$chr(93),$str(—,35))
    set -u2 %nexus.names 1
  }
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,$replace($gettok(%::text,2-,32),@,$+(,%::c1,@,),+,$+(,%::c1,+,),%,$+(,%::c1,%,)))
  set -u2 %nexus.foundwho 1
}
alias nexus.namesend { %:echo $+(,%::c2,$chr(91),,%::c3,/names,$chr(32),,%::c1,%::chan,,%::c2,$chr(93),$str(—,35)) | unset %nexus.names }

alias nexus.topicstart {
  %:echo $+(,%::c2,$chr(91),,%::c3,/topic,$chr(32),,%::c1,%::nick,,%::c2,$chr(93),$str(—,35))
  %:echo $str( ,3)  $+ %::c1 $+ »  $+ %:c3 $+ Topic  $+ %::c1 $+ : %::text
}
alias nexus.topicend {
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Setby) $+(,%::c1,:,) $+(,%::c3,%::nick,) $+(,%::c3,on) $+(,%::c1,,$asctime($ctime(%::text),ddd hh:nn:sstt),) $+(,%::c2,$chr(40),,%::c1,$remove($duration($calc($ctime - $ctime(%::text))),ks,k,ays,ay,rs,r,ins,in,ecs,ec,$chr(32)),$chr(32),,%::c3,ago,%::c2,$chr(41))
  %:echo $+(,%::c2,$chr(91),,%::c3,/topic,$chr(32),,%::c1,%::chan,,%::c2,$chr(93),$str(—,35))
}
alias nexus.who {
  if (!%nexus.who) { 
    %:echo $+(,%::c2,$chr(91),,%::c3,/who,$chr(32),,%::c1,start,,%::c2,$chr(93),$str(—,35))
    set -u2 %nexus.who 1
  }
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c1,%::cmode,,%::c3,%::nick,) $+(,%::c2,$chr(40),,%::c1,%::realname,,%::c2,$chr(41),,%::c3) is $+(,$iif(%::away == H,HERE,AWAY),) on $+(,%::c1,%::wserver,) $iif(not !isin %::isoper,$+(,%::c2,$chr(40),,%::c3,IRC Operator,,%::c2,$chr(41),))
  set -u2 %nexus.foundwho 1
}
alias nexus.whoend {
  if (%nexus.foundwho) %:echo $+(,%::c2,$chr(91),,%::c3,/who,$chr(32),,%::c1,end,,%::c2,$chr(93),$str(—,35))
  else %:echo $+(,%::c1,-,,%::c3,-,,%::c1,-,) No matches for $+(,%::c2,$chr(40),,%::c1,,%::value,,%::c2,$chr(41),)
  unset %nexus.*
}
alias nexus.whoisstart {
  %:echo $+(,%::c2,$chr(91),,%::c3,/whois,$chr(32),,%::c1,%::nick,,%::c2,$chr(93),$str(—,35))
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Address,) $+(,%::c1,:,) $+(,%::c3,$replace(%::address,$chr(46),$+(,%::c1,$chr(46),,%::c3),@,$+(,%::c1,@,,%::c3))) $+(,%::c2,$chr(40),,%::c1,%::realname,,%::c2,$chr(41))
}
alias nexus.whowasstart {
  %:echo $+(,%::c2,$chr(91),,%::c3,/whowas,$chr(32),,%::c1,%::nick,,%::c2,$chr(93),$str(—,35))
  %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Address,) $+(,%::c1,:,) $+(,%::c3,$replace(%::address,$chr(46),$+(,%::c1,$chr(46),,%::c3),@,$+(,%::c1,@,,%::c3))) $+(,%::c2,$chr(40),,%::c1,%::realname,,%::c2,$chr(41))
}
