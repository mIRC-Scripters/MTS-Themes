alias whois.init {
  var %sfx = $gettok($2,$numtok($2,46),46)
  if ((%sfx !isnum) && (%sfx != com) && (%sfx != net) && (%sfx != org) && (%sfx != edu) && (%sfx != gov)) {
    var %sf = $+([,,$iif($readini($scriptdir $+ tables\wwn.sht,wwn,%sfx),$readini($scriptdir $+ tables\wwn.sht,wwn,%sfx),Unknow),,])
  }
  %:echo  $+ %::c2 $+ » Whois Report For: $+ %::c3 $1
  %:echo  $+ %::c2 > Name: $3- 
  %:echo  $+ %::c2 > Host: $2 %sf
}
alias whois.server {
  %:echo  $+ %::c2 > Server: $2
  %:echo  $+ %::c2 > Server info: $3-
}
alias raw_001 { %:echo $1  $+ %::c3 $+ Wellcome: $2- }
alias raw_004 { %:echo $1  $+ %::c3 $+ Server Protocols: $2- }
alias raw_250 { %:echo $1  $+ %::c3 $+ Total users Online: $5  }
alias modes { 
  if ($4 && (o isin $3 || b isin $3 || v isin $3 ) ) { %:echo  $+ %::c1 $+ - $+ %::c2 [ $+ %::c3 $+ $2 $+  $+ %::c2 $+ ] $+ %::c3 mode: $+ %::c4 $3  $+ %::c2 $+ [ $+ %::c4 $4-  $+ %::c2 $+ ]  }
  else { %:echo  $+ %::c1 $+ - $+ %::c2 [ $+ %::c3 $+ $2 $+  $+ %::c2 $+ ( $1 )] $+ %::c3 mode: $+ %::c4 $3- } 
}
alias users {
  ;  set -un %:echo echo $1
  %:echo  $+ %::c1 $+ -  $+ %::c2 $+ Users:  $+ %::c3 $+ [ $+ %::c2 Ops: $nick($1,0,o,rvh) Voices: $nick($1,0,v,roh) Users: $nick($1,0,r,ovh) Total: $nick($1,0)  $+ %::c3 $+ ]
}
alias w.idle { %:echo  $+ %::c2 > Idle: $duration($1) $+ , $+  $+ %::c2 Online: $2- }
