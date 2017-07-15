;____________
; whois
alias c_startwhois {
  %:echo  $+  $+ %::c1 $+ / $+  $+ %::c2 $+ =================================================== $+  $+ %::c2 $+ \
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ ====================w=h=0=i=s====================== $+  $+ %::c2 $+ \
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ nick: %::nick
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ name: %::realname
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ host: %::address
}
alias c_endwhois {
  %:echo  $+ %::c1 $+ \ $+  $+ %::c2 $+ ======================e=n=d======================== $+  $+ %::c2 $+ /
  %:echo  $+ %::c1 $+ \ $+  $+ %::c2 $+ ====================w=h=0=i=s====================== $+  $+ %::c2 $+ /
}
alias c_idsi {
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ idle: %::idletime
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ signoned: %::signontime
}
;whowas
alias c_startwhowas {
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ =================================================== $+  $+ %::c2 $+ \
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ ====================w=h=0=w=a=s==================== $+  $+ %::c2 $+ \
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ nick: %::nick
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ name: %::realname
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ host: %::address
}
alias c_endwas {
  %:echo  $+ %::c1 $+ \ $+  $+ %::c2 $+ =======================e=n=d======================= $+  $+ %::c2 $+ /
  %:echo  $+ %::c1 $+ \ $+  $+ %::c2 $+ ====================w=h=0=w=a=s==================== $+  $+ %::c2 $+ /
}
;RAW.251
alias c_251 {
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ users: %::users
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ invisible users: %::text
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ servers: %::value
}
;RAW.255
alias c_255 {
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ local clients: %::users
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ global clients: %::value
}
;RAW.256
alias c_256 {
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ local users: %::users
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ top local users: %::value
}
;266
alias c_266 {
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ global users: %::users
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ top global users: %::value
}
;chan stuff
alias c_cmod {
  %:echo  $+ %::c1 $+ / $+  $+ %::c2 $+ modes: %::modes
}
