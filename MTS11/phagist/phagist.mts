[mts]
NAME Phagist v+1.0
AUTHOR Nyhl Narvath
EMAIL narvath@hotmail.com
DESCRIPTION Phagist theme is like, like, like an hamburger?
SCRIPT Phagist.mrc
WEBSITE none
MTSVERSION 1.1
VERSION 1.1
PREFIX >
PARENTEXT > <text>
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn
LOAD Load.. Phagist
UNLOAD Unload.. Phagist
CTCPSELF !script %:echo %::pre Ctcp 11( $+ %::nick $+ 11/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) $+ 11)
CTCPREPLYSELF !script %:echo %::pre Ctcp Reply 11( $+ %::nick $+ 11/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) $+ 11) 11( $+ %::text $+ 11)
MODE <pre> Mode 11(<nick>11/<modes>11) <chan>
JOIN <pre> Join 11(<nick>11/<address>11) <chan>
JOINSELF <pre> Now talking in <chan> !
PART <pre> Part 11(<nick>11/<address>11) <chan>
TEXTCHAN !script %:echo 11( $+ %::cmode $+ %::nick $+ 11) %::text
TEXTQUERY !script %:echo 11( $+ %::nick $+ 11) %::text
KICK <pre> Kick 11(<knick>11/<text>11) by <nick> on <chan>
KICKSELF <pre> Kick 11(<me>11/<text>11) by <nick> on <chan>
QUIT <pre> Quit 11(<nick>11/<address>11) <chan> 11(<text>11)
TOPIC <pre> Topic 11(<nick>11/<text>11) <chan>
NICK <pre> Nick 11(<nick>11/<newnick>11) <chan>
TEXTCHANSELF !script %:echo 11( $+ %::cmode $+ %::me $+ 11) %::text
TEXTQUERYSELF !script %:echo 11( $+ %::me $+ 11) %::text
MODEUSER <pre> Mode user 11(<me>11/<modes>11)
INVITE <pre> Invite 11(<nick>11/<chan>11)
NICKSELF <pre> Nick 11(<nick>11/<newnick>11) <chan>
ACTIONCHAN > <nick> <text>
ACTIONQUERY > <nick> <text>
ACTIONCHANSELF > <nick> <text>
ACTIONQUERYSELF > <nick> <text>
CTCP !script %:echo %::pre Ctcp 11( $+ %::nick $+ 11/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) $+ 11)
CTCPCHAN <pre> Ctcp 11(<nick>11/<ctcp>11)
CTCPREPLY !script %:echo %::pre Ctcp Reply 11( $+ %::nick $+ 11/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) $+ 11) 11( $+ %::text $+ 11)
SERVERERROR <pre> Server error 11(<text>11)
NOTICE <pre> Notice 11(<nick>11/<text>11)
NOTICECHAN <pre> Notice 11(<nick>11/<text>11) <chan>
NOTICESELF <pre> Notice 11(<nick>11/<text>11)
NOTICESELFCHAN <pre> Notice 11(<nick>11/<text>11) <chan>
NOTIFY <pre> Notify 11(<nick>11/<text>11)
UNOTIFY <pre> Unotify 11(<nick>11/<text>11)
DNS <pre> Dns 11(<nick>11/<address>11)
DNSERROR <pre> Dns error 11(Unabled to resolve11)
DNSRESOLVE <pre> Dns resolved 11(<nick>11/<raddress>11)
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,128,255 0,0,252 68,48,208 127,127,127 210,210,210
FONTDEFAULT Andale Mono,12
FONTCHAN Andale Mono,12
FONTQUERY Andale Mono,12
whois !script phagist.whois
raw.332 <pre> Current topic 11(<text>11)
raw.317 !script return
raw.333 !script return
raw.324 !script return
raw.329 !script return
raw.312 !script return
raw.305 <pre> You are no longer marked as away
raw.306 <pre> You are no longer marked as away
raw.401 <pre> No such user 11(<nick>11)
raw.404 <pre> Cannot send to channel +m
raw.467 <pre> Cannot join <chan> +k
raw.471 <pre> Cannot join <chan> +l
raw.473 <pre> Cannot join <chan> +i
raw.474 <pre> Cannot join <chan> +b
raw.475 <pre> Cannot join <chan> +k
raw.353 !script return
raw.366 !script return
raw.327 <pre> <text>
raw.other <pre> <text>
raw.821 !script return
raw.822 !script return
RAW.001 <pre> <text>
RAW.002 <pre> Host 11(<server>11) running version 11(<value>11)
RAW.003 <pre> Server created on 11(<value>11)
RAW.005 <pre> Protocols supported by this server 11(<text>11)
RAW.250 <pre> Total connection(s) 11(<value>11)
RAW.251 <pre> Users 11(<users>11) Invisible 11(<text>11) Servers 11(<value>11)
RAW.252 <pre> Operator(s) online 11(<value>11)
RAW.253 <pre> Unknown connection(s) 11(<value>11)
RAW.254 <pre> Number of channels formed 11(<value>11)
RAW.255 <pre> Local clients 11(<users>11) on 11(<value>11) server(s)
RAW.265 <pre> Local users 11(<users>11) Max 11(<value>11)
RAW.266 <pre> Global users 11(<users>11) Max 11(<value>11)
RAW.302 <pre> Userhost 11(<nick>11) 11(<address>11)
CLINEOP 1
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 1
CLINEOWMER 1
CLINEENEMY 1
CLINEFRIEND 1
CLINEME 1
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>