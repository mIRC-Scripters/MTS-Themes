alias cs.endnames {
  echo -t %::chan 15Current ownerkey:14 $iif($hget(okey,%::chan),$sr($ifmatch),None Recorded)
  echo -t %::chan 15Current hostkey:14 $iif($hget(hkey,%::chan),$sr($ifmatch),None Recorded)
  echo -t %::chan 15There are:14 $iif($nick(%::chan,0,q) >= 1,$+($ifmatch,$chr(32),Owners,$chr(44)))  $iif($nick(%::chan,0,o) >= 1,$+($ifmatch,$chr(32),Ops,$chr(44)))  $iif($nick(%::chan,0,%) >= 1,$+($ifmatch,$chr(32),Helpers,$chr(44)))  $iif($nick(%::chan,0,+) >= 1,$+($ifmatch,$chr(32),Voiced users,$chr(44))) $nick(%::chan,0) Clients in total
    if $chan(%::chan).topic {
      echo -t %::chan 15Topic:14 $chan(%::chan).topic
    if %topic.nick { echo -t %::chan 15Topic:14 %topic.nick | unset %topic.nick }
  }
  echo -t %::chan 15Names synched in:14 $calc($calc($ticks - %join. [ $+ [ %::chan ] ] )/1000) $+ s | unset %join. [ $+ [ %::chan ] ]
  linesep %::chan
}

;alias cs.whois.start {
;  %:echo Whois 7>> Nick:14 $1
;  %:echo Whois 7>> Host:14 $2
;  %:echo Whois 7>> IRCName:14 $3-
;}
alias cs.whois.start {
  %:echo 1410( 15/whois14 $1 10)____________________14____________________
  %:echo 14...10( 15Host7;14 $gettok($gettok($address($1,5),1,64),2,33) $+ @ $+ $2
  %:echo 14...10( 15IRCName7;14 $3-
}
alias cs.whois.idle {
  %:echo 14...10( 15Idle7;14  $duration($2) $+ , signon $3-
}