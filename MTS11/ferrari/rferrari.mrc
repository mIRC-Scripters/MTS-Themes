

alias f.init {
  %:echo 15____8[  4Start 4Of 4Whois  8]14________ ___15__ __ _
  %:echo 14User: $1 15«00 $+ $2 $+ 15» 
  %:echo 14Name:15 $3-
}

alias f.chan {
  %:echo 14Channels:15 $1-
}

alias f.server {
  %:echo 14Server:15 $1-
}

alias f.idle {
  %:echo 14Idle:15 $duration($1)
  %:echo 14Signed On:15 %::signontime
}

alias f.away {
  %:echo 14Away:15 $1-
}

alias f.end {
  %:echo 15____8[  4End 4Of 4Whois  8]14________ ___15__ __ _
}
