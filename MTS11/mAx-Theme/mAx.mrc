alias mAx.Load {
  %:echo  $+ %::c3 $+ ::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.::
  %:echo  $+ %::c4 $+ [ $+ %::c3 $+ mAx $+ %::c4 $+ ] theme loaded $+  $+ %::c4 $+ ... / Check www.mAx-Script.de.vu for a newer Version
  %:echo  $+ %::c3 $+ ::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.::
}

alias mAx.JoinSelf {
  %:echo  $+ %::c3 $+ ::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::
%:echo  $+ %::c1 $+ Welcome to $+ %::c4 $+ :  $+ %::c2 $+ %::chan  $+ %::c4 $+ ...
}

alias mAx.314 {
  %:echo  $+ %::c3 $+ ::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::
  %:echo  $+ %::c2 $+ Whowas $+  $+ %::c4 $+ : %::nick
  %:echo  $+ %::c2 $+ %::pre $+  $+ %::c3 Address $+  $+ %::c4 $+ : %::address
  %:echo  $+ %::c2 $+ %::pre $+  $+ %::c3 Name $+  $+ %::c4 $+ : %::realname
}

alias mAx.311 {
  %:echo  $+ %::c3 $+ ::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::
  %:echo  $+ %::c2 $+ Whois $+  $+ %::c4 $+ : %::nick
  %:echo  $+ %::c2 $+ %::pre $+  $+ %::c3 Address $+  $+ %::c4 $+ : %::address
  %:echo  $+ %::c2 $+ %::pre $+  $+ %::c3 Name $+  $+ %::c4 $+ : %::realname
}

alias mAx.317 {
  %:echo  $+ %::c2 $+ %::pre $+  $+ %::c3 Idle $+  $+ %::c4 $+ : $duration(%::idletime)
  %:echo  $+ %::c2 $+ %::pre $+  $+ %::c3 Signed on $+  $+ %::c4 $+ : %::signontime
}

alias mAx.333 {
  %:echo %::pre  $+ %::c3 $+ Author $+ %::c4 $+ : [ $+ %::c3 $+ %::nick $+  $+ %::c4 $+ ] on $+ %::c4 $+ : [ $+ %::c3 $+ $asctime(%::text,dd. mmm $+ $chr(44) HH:nn) $+  $+ %::c4 $+ ]
%:echo  $+ %::c3 $+ ::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::
}

alias mAx.352 {
%:echo %::pre  $+ %::c4 $+ [ $+ %::c3 $+ who $+ %::c4 $+ ]  $+ %::cmode $+  $+ %::c2 $+  $+ %::nick $+   $+ %::c4 $+ [ $+ %::c3 $+ %::address $+  $+ %::c4 $+ ]  $+ %::c3 $+ Realname $+ %::c3 $+ : %::realname 
%:echo %::pre  $+ %::c3 $+ Away $+ %::c4 $+ : $iif(%::away == G,Yes,No)  $+ %::c3 $+ IRC Operator $+ %::c4 $+ : %::isoper  $+ %::c3 $+ Channel $+ %::c4 $+ : %::chan 
}

alias mAx.406 {
  %:echo  $+ %::c3 $+ ::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::
  %:echo  $+ %::c2 $+ Whowas $+  $+ %::c4 $+ : %::nick
  %:echo  $+ %::c2 $+ %::pre There was no such nickname
}