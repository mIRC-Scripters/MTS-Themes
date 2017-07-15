[mts]
NAME Sunblind
AUTHOR Dallas
EMAIL Icebreaker006@hotmail.com
DESCRIPTION Sunblind. uses bright font, get it from http://ileet.net/bright.fon if you don't have it. Enjoy..
WEBSITE http://www.controlroot.net/geek-x
BaseColors 00,01,12,14
MTSVERSION 1.1
VERSION 1.0
PREFIX ÿÿ
TIMESTAMP ON
TIMESTAMPFORMAT <c3>º<c3> (<c1>hh<c3>:<c1>nnt<c3>)
Script sunblind.mrc
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
COLORS 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,00,01,00,00,00,01
scheme1 White
scheme2 Red
scheme3 Blue
scheme4 Orange

RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 52,147,239 255,0,255 60,60,60 208,212,208
LOAD <pre> Loaded Sunblind theme..

QUIT  !script sun.blind Quit %::nick $replace(%::address,@,@,.,.) ( $+ %::text $+ )
JOIN  !script sun.blind Join %::nick $replace(%::address,@,@,.,.)
JOINSELF !script sun.blind Joined %::chan
PART !script sun.blind Part %::nick $replace(%::address,@,@,.,.)

MODE !script sun.blind Mode %::nick %::modes

KICK !script sun.blind Kick %::nick kicked %::knick ( $+ %::text $+ )
KICKSELF !script sun.blind Kick %::nick kicked %::knick ( $+ %::text $+ )

TOPIC !script sun.blind Topic %::nick changes topis to %::text
NICK !script sun.blind Nick %::nick changes nick to %::newnick
NICKSELF !script sun.blind Nick %::nick changes nick to %::newnick
MODEUSER !script sun.blind User Mode %::modes

INVITE !script sun.blind Invite %::nick invites you to %::chan

TEXTCHAN !script %:echo  $+ %::c3 $+ º $+  $+ %::c1 $iif(%::cmode,%::cmode,ÿ) $align(13,%::nick)  $+ %::c3 $+ º $+  $+ %::c1 %::text
TEXTQUERY !script %:echo  $+ %::c3 $+ º $+  $+ %::c1 $align(13,%::nick)  $+ %::c3 $+ º $+  $+ %::c1 %::text
TEXTCHANSELF !script %:echo  $+ %::c3 $+ º $+  $+ %::c1 $iif(%::cmode,%::cmode,ÿ) $align(13,%::me)  $+ %::c3 $+ º $+  $+ %::c1 %::text
TEXTQUERYSELF !script %:echo  $+ %::c3 $+ º $+  $+ %::c1 $align(13,%::me)  $+ %::c3 $+ º $+  $+ %::c1 %::text

ACTIONCHAN !script %:echo  $+ %::c3 $+ * $+  $+ %::c1 $iif(%::cmode,%::cmode,ÿ) $align(13,%::nick)  $+ %::c3 $+ º $+  $+ %::c1 %::text
ACTIONQUERY !script %:echo  $+ %::c3 $+ * $+  $+ %::c1 $align(13,%::nick)  $+ %::c3 $+ º $+  $+ %::c1 %::text
ACTIONCHANSELF !script %:echo  $+ %::c3 $+ * $+  $+ %::c1 $iif(%::cmode,%::cmode,ÿ) $align(13,%::me)  $+ %::c3 $+ º $+  $+ %::c1 %::text
ACTIONQUERYSELF !script %:echo  $+ %::c3 $+ * $+  $+ %::c1 $align(13,%::me)  $+ %::c3 $+ º $+  $+ %::c1 %::text

Ctcp !script sun.blind CTCP %::nick %::ctcp ( $+ %::text $+ )
CtcpChan !script sun.blind CTCP %::nick $+ @ $+ %::chan %::ctcp ( $+ %::text $+ )
CtcpSelf !script sun.blind CTCP %::nick %::ctcp ( $+ %::text $+ )
CtcpChanSelf !script sun.blind CTCP %::nick $+ @ $+ %::chan $+ @ $+ %::chan %::ctcp ( $+ %::text $+ )
CtcpReply !script sun.blind CTCP Reply %::nick %::ctcp ( $+ %::text $+ )
CtcpReplySelf !script sun.blind CTCP Reply %::nick %::ctcp ( $+ %::text $+ )

SERVERERROR !script sun.blind Servererror: %::text

NOTICESERVER !script %:echo %::pre Notice %::nick ( $+ %::text $+ )
NOTICE !script %:echo %::pre Notice %::nick ( $+ %::text $+ )
NOTICECHAN !script %:echo %::pre Notice %::nick $+ @ $+ %::chan ( $+ %::text $+ )
NOTICESELF !script %:echo %::pre Notice %::nick ( $+ %::text $+ )
NOTICESELFCHAN !script %:echo %::pre Notice %::nick $+ @ $+ %::chan ( $+ %::text $+ )

NOTIFY !script sun.blind Notify %:nick is online
UNOTIFY !script sun.blind Notify %:nick is offline

DNS <pre> DNS<c1>:<c2> <Address>
DNSERROR <pre> Unable to resolve<c1>:<c2> <address>
DNSRESOLVE <pre> DNS Resolved<c1>:<c2> <naddress> <raddress>

raw.311 !Script sun.blind.whois1
raw.319 !Script sun.blind.whois4
raw.317 !Script sun.blind.whois2
raw.312 !Script sun.blind.whois3
raw.307 !Script sun.blind.whois8
raw.301 !Script sun.blind.whois5
raw.313 !Script sun.blind.whois6
raw.318 !Script sun.blind.whois7

raw.314 !script sun.blind %::nick was %::address ( $+ %::realname $+ )
raw.251 !script sun.blind Connected: %::server Users: %::users Invisible: %::text Servers: %::value
raw.252 !script sun.blind Operators online: %::value
raw.253 !script sun.blind Unknown connections: %::value
raw.254 !script sun.blind Channels formed: %::value
raw.255 !script sun.blind Clients: %::users
raw.332 !script sun.blind.onjoin3
raw.333 !script sun.blind.onjoin4
raw.324 !script sun.blind.onjoin2
raw.352 !script sun.blind %::nick is %::realname
raw.329 !Script sun.blind.onjoin1
raw.305 !script sun.blind You are now Back 
raw.306 !script sun.blind You are now Away
raw.401 !script sun.blind No such nick <nick>
raw.403 !script sun.blind No suck chan <chan>
raw.404 !script sun.blind Cannot send %%:text to %::chan
raw.405 !script sun.blind Cannot join %::chan Your on to many channels
raw.406 !script sun.blind Whowas error, no such nick: $$:nick
raw.421 !script sun.blind No commands for / $+ $lower(%::value)
raw.432 !script sun.blind Invalid nickname
raw.433 !script sun.blind Nickname already in use
raw.436 !script sun.blind Nickname collision with %::nick
raw.438 !script sun.blind Nickname changed too fast, please wait a while and try again
raw.439 !script sun.blind Nickname changed too fast, please wait a while and try again
raw.441 !script sun.blind %::nick is not on %::chan
raw.442 !script sun.blind You're not on %::chan
raw.443 !script sun.blind %::nick is already on %::chan
raw.461 !script sun.blind More parameters needed for <text>
raw.465 !script sun.blind Sorry, You're banned from this server.
raw.467 !script sun.blind Cannot join %::chan $+ : Need key
raw.471 !script sun.blind Cannot join %::chan $+ : Room Full
raw.472 !script sun.blind Unknown character: <text>
raw.473 !script sun.blind Cannot join %::chan $+ : You must be invited +i
raw.474 !script sun.blind Cannot join %::chan $+ : Your ban +b
raw.475 !script sun.blind Cannot join %::chan $+ : Incorect key
raw.478 !script sun.blind Cannot ban <text><c1>:<c2> Banlist is full
raw.482 script sun.blind You're not a channel operator on %::chan
raw.511 !script sun.blind You're /silence list is full.

[scheme1]
COLORS 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01,01,00
BaseColors 01,00,12,14

[scheme2]
BaseColors 00,01,04,14

[scheme3]
BaseColors 00,01,12,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 208,212,208

[scheme4]
BaseColors 00,01,07,14
