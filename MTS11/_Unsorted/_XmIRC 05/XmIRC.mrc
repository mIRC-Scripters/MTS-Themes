raw 301:*: {
  haltdef
  echo -a       (?)      $2 is away — $3-
}
raw 307:*: {
  haltdef
  echo -a       (?)      $2 is using a registered nick
}
raw 311:*:{
  haltdef
  echo -a       (?)      START (/whois)   
  echo -a       (?)      $2 is $3 $+ $+ @ $+ $+ $4
  echo -a       (?)      $2 is " $+ $6- $+ "
}
raw 312:*:{
  haltdef
  echo -a       (?)      $2 is on IRC via $3 $4-
}
raw 313:*: {
  haltdef
  echo -a       (?)      $2 is a(n) $5 $6 $7 $8 $9 on $network
}
raw 314:*:{
  haltdef
  echo -a       (?)      START (/whowas)
  echo -a       (?)      $2 was $3 $+ $+ @ $+ $+ $4 * $6-
}
raw 317:*:{
  haltdef
  echo -a       (?)      $2 signed on at $asctime($4,dddd) $+ , $asctime($4,mmmm d) $+ , $asctime($4,yyyy) $+ , $asctime($4,h:nn:sstt)
  echo -a       (?)      $2 has been on $network for $unix($calc($ctime - $4))
  echo -a       (?)      $2 has been idle on $network for $unix($3)
}
raw 318:*:{
  haltdef
  echo -a       (?)      END (/whois)
}
raw 319:*:{
  haltdef
  echo -a       (?)      $2 is in $3-
}
raw 330:*: {
  haltdef
  echo -a       (?)      $2 $+ 's authname: $3
}
raw 338:*:{
  haltdef
  echo -a       (?)      $2 $+ 's real host: $3
  echo -a       (?)      $2 $+ 's IP address: $4
}
raw 369:*:{
  haltdef
  echo -a       (?)      END (/whowas)
}
raw 378:*:{
  haltdef
  echo -a       (?)      $2 is connecting from: $6-
}
raw 379:*:{
  haltdef
  echo -a       (?)      $2 is using modes: $6-
}
raw 401:*:{
  haltdef
  echo -a       (?)      $2 is not online!
}
raw 406:*:{
  haltdef
  echo -a       (?)      The nickname ' $+ $2 $+ ' hasn't been online recently.
}


alias unix {
  var %dura.duration $duration($1)
  if (wk isin %dura.duration) { var %dura.week $calc($remove($matchtok(%dura.duration,wk,1,32),wks,wk) * 7) }
  if (day isin %dura.duration) { var %dura.day $remove($matchtok(%dura.duration,day,1,32),days,day) }
  if (hr isin %dura.duration) { var %dura.hour $remove($matchtok(%dura.duration,hr,1,32),hrs,hr) }
  if (min isin %dura.duration) { var %dura.min $remove($matchtok(%dura.duration,min,1,32),mins,min) }
  if (sec isin %dura.duration) { var %dura.sec $remove($matchtok(%dura.duration,sec,1,32),secs,sec) }
  var %dura.days $calc(%dura.week + %dura.day)
  var %dura.days %dura.days $iif(%dura.days == 1,day,days)
  return %dura.days $+ $chr(44) $iif($len(%dura.hour) == 0,00) $+ $iif($len(%dura.hour) == 0,00) $+ $iif($len(%dura.hour) == 1,0 $+ %dura.hour,%dura.hour) $+ : $+ $iif($len(%dura.min) == 0,00) $+ $iif($len(%dura.min) == 0,00) $+ $iif($len(%dura.min) == 1,0 $+ %dura.min,%dura.min) $+ : $+ $iif($len(%dura.sec) == 0,00) $+ $iif($len(%dura.sec) == 0,00) $+ $iif($len(%dura.sec) == 1,0 $+ %dura.sec,%dura.sec)
}
;unix alias made by nix2k on mircscripts.org
