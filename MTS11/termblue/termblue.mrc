alias blue.start {
  color inactive $color(editbox)
  %:echo 
  %:echo %::pre termBlue mts theme [/termblue]
  %:echo 
}

alias blue.whois {
  %:echo  $+ %::c2 ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄ $+ %::c2ÄÄÄ $+ %::c4 $+ ÄÄÄÄÄÿ
  %:echo  $+ %::c2 ³  $+ %::c2 %::nick  $+ %::c4 $+ [ÿ $+ %::c3 $+ %::address  $+ %::c4 $+ ÿ]
  %:echo  $+ %::c3 ÃÄÄÄÄ $+ %::c2 $+ ÄÄ $+ %::c3 $+ ÄÄÄÄÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄ $+ %::c4 $+ ÄÄÄÄÄÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ
  %:echo  $+ %::c2 ³  $+ %::c2 Name  $+ %::c4 $+ : $+ %::c3 %::realname
  %:echo  $+ %::c2 ³  $+ %::c2 Channels  $+ %::c4 $+ : $+ %::c3 %::chan
  %:echo  $+ %::c3 ³  $+ %::c2 Server  $+ %::c4 $+ : $+ %::c3 %: %::wserver  $+ %::c4 $+ [ $+ %::c2 $+ %::serverinfo  $+ %::c4 $+ ]
  if (%::away) { %:echo  $+ %::c3 ³  $+ %::c2 Away  $+ %::c4 $+ : $+ %::c3 %::away }
  if (%::idletime) {  %:echo  $+ %::c2 ³  $+ %::c2 Idle  $+ %::c4 $+ : $+ %::c3 $remove(%::idletime,ks,k,ays,ay,rs,r,ins,in,ecs,ec)  $+ %::c4 $+ [ $+ %::c2 Sign on: $+ %::c3 $asctime($ctime(%::signontime),HH:nn:ss è dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ ))  $+ %::c3 $+ · $+ %::c2 Online time: $+ %::c3 $blue.st($calc($ctime - $ctime(%::signontime)))  $+ %::c4 $+ ] }
  if (%::isregd == is) { %:echo  $+ %::c3 ³  $+ %::c2 Status  $+ %::c4 $+ : $+ %::c3 is  a registered nick }
  if (%::text) { %:echo  $+ %::c3 ³  $+ %::c2 Real Hostname  $+ %::c4 $+ : $+ %::c3 %::text }
  if (%::isoper == is) { %:echo  $+ %::c2 ³  $+ %::c2 IRCop  $+ %::c4 $+ : $+ %::c3 is an IRC whore $iif($gettok(%::text,3-,32), $+ %::c4 $+ [ $+ %::c3 $ifmatch  $+ %::c4 $+ ]) }
  %:echo  $+ %::c3 ÀÄ $+ %::c2 $+ ÄÄÄÄÄÄÄ $+ %::c3 $+ Ä $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄ $+ %::c2 $+ ÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄ $+ %::c4 $+ ÄÄÄÄÄ
}
alias blue.whowasstart {
  %:echo  $+ %::c2 ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÿ
  %:echo  $+ %::c2 ³  $+ %::c2 %::nick  $+ %::c4 $+ [ÿ $+ %::c3 $+ %::address  $+ %::c4 $+ ÿ]
  %:echo  $+ %::c3 ÃÄÄÄÄ $+ %::c2 $+ ÄÄ $+ %::c3 $+ ÄÄÄÄÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ
  %:echo  $+ %::c2 ³  $+ %::c2 Name  $+ %::c4 $+ : $+ %::c3 %::realname
}

alias blue.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)

alias blue.lusersstart {
  %:echo  $+ %::c4 ÿÿÿÿ: û $+ %::c2 ÿInvisible  $+ %::c4 $+ : $+ %::c3 %::text  $+ %::c4 $+ [ $+ %::c3 $calc($round(%::text / %::users,0)) $+ %  $+ %::c4 $+ ]
  %:echo  $+ %::c4 ÿÿÿÿ: û $+ %::c2 ÿServers  $+ %::c4 $+ : $+ %::c3 %::value $+ 
}
alias blue.raw.255 {
  %:echo  $+ %::c4 ÿÿÿÿ: û $+ %::c2 ÿClients  $+ %::c4 $+ : $+ %::c3 %::users $+ 
  %:echo  $+ %::c4 ÿÿÿÿ: û $+ %::c2 ÿServers  $+ %::c4 $+ : $+ %::c3 %::value $+ 
}
alias blue.lusersend {
  %:echo  $+ %::c4 ÿÿÿÿ: û $+ %::c2 ÿGlobal users  $+ %::c4 $+ : $+ %::c3 %::users  $+ %::c4 $+ [ $+ %::c1 Max: $+ %::c3 %::value  $+ %::c4 $+ ]
  %:echo 
}

alias blue.topic {
  %:echo  $+ %::c2 $+ ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÿ
  %:echo  $+ %::c2 $+ ³  $+ %::c2 $+ Topic  $+ %::c4 $+ : %::text
}
alias blue.endtopic {
  %:echo   $+ %::c3 $+ ³  $+ %::c2 $+ Set by  $+ %::c4 $+ : $+ %::c3 %::nick  $+ %::c2 $+ on $+ %::c3 %::text
  %:echo  $+ %::c3 $+ ÀÄ $+ %::c2 $+ ÄÄÄÄÄÄÄ $+ %::c3 $+ Ä $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄ
}
alias blue.names {
  if (%::chan != %bluetheme.names.chan) {
    %:echo %::pre  $+ %::c2 Generating names list  $+ %::c4 $+ [ $+ %::c3 %::chan $+  $+ %::c4 ]ÿ
    %:echo  $+ %::c2 $+ ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿ÿ
    %bluetheme.names.chan = %::chan
    %::ticks = $ticks
  }
  tokenize 32 $gettok(%::text,2-,32)
  var %i = 1,%x = 4
  while ($gettok($1-,$+(%i,-,%x),32)) { %:echo  $+ %::c2 $+ ³ $_blue.n($gettok($1-,$+(%i,-,%x),32)) $chr(255) $+  $+ %::c2 $+ ³ | inc %i 4 | inc %x %x }
}
alias _blue.n tokenize 32 $1- | return $_blue.pr $str($chr(255),2) $+  $+ %::c4 $+ [ $+ %::c3 $+ $1 $+  $+ %::c4 $+ ] $+ %::c2 $+ $str($chr(255),$calc(10 - $len($1))) $+ 13ö  $+ %::c4 $+  $+ %::c4 $+ [ $+ %::c3 $+ $2 $+  $+ %::c4 $+ ] $+ %::c4 $+ $str($chr(255),$calc(10 - $len($2))) $+ 13ö  $+ %::c4 $+ [ $+ %::c3 $+ $3 $+  $+ %::c4 $+ ] $+ %::c4 $+ $str($chr(255),$calc(10 - $len($3))) $+ 13ö  $+ %::c4 $+  $+ %::c4 $+ [ $+ %::c3 $+ $4 $+  $+ %::c4 $+ ] $+ %::c4 $+ $str($chr(255),$calc(10 - $len($4)))
aluas _blue.pr return 12ù13í12ù
alias blue.endnames {
  %:echo  $+ %::c3 $+ ÀÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄ $+ %::c3 $+ Ä $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄ $+  $+ %::c3 $+ $calc(($ticks - %::ticks) /1000) $+ s $+  $+ %::c3 $+ $str(Ä,$calc(12- $len($calc(($ticks - %::ticks) /1000) $+ s))) $+  $+ %::c2 $+ Ùÿÿÿÿÿÿÿÿÿ
  if (-s isin %:echo) %:echo -
  unset %bluetheme.names.chan
}


alias termblue $iif($query($active) || $chan($active) || $chat($active),me is using mts/termBlue theme.)
alias blue.raw.004 {
  %:echo %::pre 12Usermodes: $+ %::c3 $gettok(%::text,3,32)
  %:echo %::pre 12Chanmodes: $+ %::c3 $gettok(%::text,4,32)
}
