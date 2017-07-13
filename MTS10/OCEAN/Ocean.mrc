alias ocean_load .timer 1 1 { ocean_load_ %:echo %::pre }
alias ocean_load_ {
  if ($window(@ocean_load)) window -c @ocean_load
  window -ph @ocean_load 1 1 300 300
  drawpic @ocean_load 0 0 $scriptdir $+ channel.jpg
  colour 13 $getdot(@ocean_load,1,1)
  window -c @ocean_load
  $1- Ocean theme loaded, get more at: http://HennesScript.cjb.net
  $1- Thanks to Oxigun for some improvements.
}

alias ocean.whois1 {
  %:echo  $+ %::c1 $+ !×¡ $+ %::c3 ---.-.-.--------.-...-------------.-.-.--
  %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Whois on: $+ %::c2 %::nick
  %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Real name: $+ %::c2 %::realname
  %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Address: $+ %::c2 %::address
  if ($mtsengine == HennesScript) %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Country: $+ %::c2 $get_country($2)
  else %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Country: $+ %::c2 Not supported by MTS engine
}
alias ocean.whois2 %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Idle time: $+ %::c2 %::idletime | %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Signon time: $+ %::c2 %::signontime
alias ocean.whois3 %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Server info: $+ %::c2 %::wserver ( $+ %::serverinfo $+ )
alias ocean.whois4 %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Registered nick: $+ %::c2 %::isoper
alias ocean.whois5 %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Operator: $+ %::c2 %::isregd
alias ocean.whois6 %:echo  $+ %::c1 $+ !×¡ $+ %::c3 Away: $+ %::c2 %::text
alias ocean.whois7 %:echo  $+ %::c1 $+ !×¡ $+ %::c3 ---.-.-.--------.-...-------------.-.-.--
