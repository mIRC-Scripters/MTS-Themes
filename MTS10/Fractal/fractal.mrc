alias _onload {
  linesep -s
  echo -s  14|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|
  echo -s  14|                              05Fractal theme14                          |
  echo -s  14|                                   05loaded14                                  |
  echo -s  14|                                  05by Tig0ti14                                |
  echo -s  14|                     05http://fractal.irc-scripts.com14              |
  echo -s  14|________________________________________|
  linesep -s
}
alias _whois.start {
  %:echo 2__(whois 14 $+ $1 $+ 2     )___________14_2_____14___2 ___ __ 14_
  %:echo 2| 14 $+ $1 $+ 2 is $2
  %:echo 2| 14 $+ $1 $+ 2 ircname: $3-
}
alias _whois.idle {
  %:echo 2| 14 $+ $1 $+ 2's been idle $duration($2) $+ , signon $3-
}
