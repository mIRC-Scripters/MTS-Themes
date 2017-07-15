alias slug.startwhois {
  %:echo 12==0 $1 15[0 $+ $2 $+ 15]
  %:echo 12==15 $+ $chr(160) ircname $+ $chr(160) : $3-
}
alias slug.channels {
  %:echo 12==15 $+ $chr(160) channels : $1-
}
alias slug.server {
  %:echo 12==15 $+ $chr(160) server $chr(160) : $1 [0 $+ $2- $+ 15]
}
alias slug.away {
  %:echo 12==15 $+ $chr(160) away $chr(160) $chr(160) : $1-
}
alias slug.oper {
  %:echo 12==13 $+ $chr(160) oper $chr(160) $chr(160) : yes
}
alias slug.idle {
  %:echo 12==15 $+ $chr(160) idle $chr(160) $chr(160) : $1 Seconds
  %:echo 12==15 $+ $chr(160) signon $chr(160) : $2-
}
alias slug.authed {
  %:echo 12==15 $+ $chr(160) account $+ $chr(160) : $gettok($1-,4,32)
}
alias slug.load {
  %:echo 12==15 Now using 15[0slug15]
  %:echo 12==15 $+ $chr(160) based upon slug.theme by slug
  %:echo 12==15 $+ $chr(160) phrep.theme by phrep_
  %:echo 12==15 $+ $chr(160) based on whitespace.theme for Irssi 0.7.98 by Lanze <simon@blueshell.dk>
  %:echo 12==15 $+ $chr(160) which was released under the GPL.
  %:echo 12==15 Enjoy.
}
alias slug.chancreated {
%:echo 12==15 Channel 13 $+ $1 $+ 15 created 15[0 $+ $asctime($2) $+ 15]
}
