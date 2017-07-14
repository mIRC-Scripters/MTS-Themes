[mts]
NAME Cold Fusion
AUTHOR ice-man@efnet
EMAIL mattdouglas@gmail.com
DESCRIPTION Monochromatic theme with various schemed accent colors.
WEBSITE none
MTSVERSION 1.1
VERSION 1.4

scheme0 blue
scheme1 cyan 
scheme2 crimson
scheme3 purple
scheme4 smoke
scheme5 lime
scheme6 orange
scheme7 yellow
scheme8 pink
scheme9 fire
scheme10 camo

SCRIPT coldfusion.mrc

COLORS 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,0,1,0,15,15,15
BASECOLORS 00,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 91,173,246 7,123,228 177,217,252 128,128,128 208,208,208

IMAGEBUTTONS 
IMAGECHAN

CLINECHAROWNER 13*
CLINECHAROP 13@
CLINECHARHOP 13%
CLINECHARVOICE 11+
CLINECHARREGULAR

CLINEFRIEND 12
CLINEENEMY 12
CLINEOP 11
CLINEHOP 11
CLINEVOICE 13
CLINEREGULAR 13
CLINEOWNER 12
CLINEME 00

FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12

PREFIX <c4>ú<c2>ú<c3>ú
PARENTEXT 14(15<text>14)
TIMESTAMP OFF
TIMESTAMPFORMAT <c4>[<c2>hh:nnTT<c4>]

LOAD !script cfusion.banner

ACTIONCHAN <c4>!<c2> <cmode><c3><nick>15 <text>
ACTIONCHANSELF <c4>!<c3> <cmode>00<me>15 <text>
ACTIONQUERY <c4>!<c2> <nick> 15<text>
ACTIONQUERYSELF <c4>!00 <me> <text>

JOIN <pre> <c2>Joins<c4>:00 <nick> 14[15<address>14]
JOINSELF <pre> <c2>Now15 talking in 00<chan>14...
PART <pre> <c2>Parts<c4>:00 <nick> 14[15<address>14] <parentext>
MODE <pre> <c2>ChanMode<c4>:00 <nick> 15sets mode14 [00<modes>14] <comments>
KICK <pre> <c2>Kicks<c4>:00 <knick> 15was kicked from00 <chan> 15by 14[15<nick>14] <parentext>
KICKSELF <pre> <c2>Kicks<c4>:00 You 15were kicked from00 <chan> 15by 14[15<nick>14] <parentext>
QUIT <pre> <c2>Quits<c4>:00 <nick> 14[15<address>14] <parentext> <comments>

TEXTCHAN !script %:echo  $+ %::c2 $+ $cfusion.chanmode(%::nick,%::chan) $+  $+ %::c4 $+ ( $+ %::c3 $+ $iif($me isin %::text,) $+ %::nick $+ $iif($me isin %::text,) $+  $+ %::c4 $+ )15 %::text
TEXTCHANSELF !script %:echo  $+ %::c3 $+ $cfusion.chanmode(%::me,%::target) $+  $+ %::c4 $+ (00 $+ %::me $+  $+ %::c4 $+ )15 %::text
TEXTQUERY <c4>(<c2><nick><c4>)15 <text>
TEXTQUERYSELF <c4>(00<me><c4>)15 <text>
TEXTMSG  <c4>[<c3><nick><c4>!<c2><address><c4>]15 <text>
TEXTMSGSELF !script %:echo   $+ %::c3 $+ >  $+ %::c2 $+ msg $+ %::c4 [ $+ %::c3 $+ $iif($ial(%::target),$ial(%::target).nick,%::target) $+  $+ %::c4 $+ ]:15 %::text %::comments
MODEUSER !script %:echo %::pre  $+ %::c2 $+ UserMode $+ %::c4 $+ :15 set mode 00 $+ %::modes $+ 14,15 modes are now 14[00 $+ $usermode $+ 14] %:comments
TOPIC <pre> <c2>Topic<c4>:00 <nick>15 sets topic 14[15<text>14]
INVITE <pre> <c2>Invite<c4>:00 <nick> 15has invited you to join 14[00<chan>14]
NICK <pre> <c2>Nick<c4>:00 <nick> 15is now known as 14[00<newnick>14]
NICKSELF <pre> <c2>Nick<c4>:00 You14(15<nick>14) 15are now known as 14[00<newnick>14]
SERVERERROR <pre> <c2>Error<c4>:15 <text>
REJOIN <pre> <c2>Attempting15 to rejoin 00<chan>14...
WALLOP <pre> <c2>Wallop<c4>:00 <nick>14,15 <text>

DNSERROR !script %:echo %::pre  $+ %::c2 $+ Failed Resolve $+ %::c4 $+ :00 $iif(!%::address,%::nick 14[15no such nick14]15,$iif(!%::nick,%::address,%::nick)) $+  %:comments
DNSRESOLVE !script %:echo %::pre  $+ %::c2 $+ Resolved $+ %::c4 $+ :00 $iif(!%::nick,$iif(%::iaddress == %::raddress,%::naddress,%::iaddress),%::nick 14[15 $+ $iif(%::iaddress == %::raddress,%::naddress,%::iaddress) $+ 14]) 15to14:00 %::raddress $+  %:comments
DNS  <c3>> <c2>dns<c4> [<c3><nick>!<target><c4>] <comments>

CTCP !script %:echo %::pre 12Ctcp $+ %::c4 $+ :  $+ %::c3 $+ $upper(%::ctcp) $+ $upper($iif(%::text,$chr(32) $+ %::text)) 15requested by14 [00 $+ %::nick $+ 14]15 to 00you %:comments
CTCPCHAN !script %:echo %::pre 12Ctcp $+ %::c4 $+ :  $+ %::c3 $+ $upper(%::ctcp) $+ $upper($iif(%::text,$chr(32) $+ %::text)) 15requested by14 [00 $+ %::nick $+ 14]15 to 00 $+ %::chan $+  %:comments
CTCPREPLY !script %:echo %::pre 12Reply $+ %::c4 $+ :  $+ %::c3 $+ $upper(%::ctcp) 15from14 [00 $+ %::nick $+ 14] $+ $iif(%::target != $me,15 to 00 $+ %::target) $+ $iif(%::text,14:15 %::text) %:comments

CTCPSELF !script %:echo   $+ %::c3 $+ >  $+ %::c2 $+ ctcp $+ %::c4 [ $+ %::c3 $+ $iif($ial(%::target),$ial(%::target).nick,%::target) $+  $+ %::c4 $+ ]:15 %::ctcp %::text %::comments
CTCPCHANSELF  <c3>> <c2>ctcp<c4> [<c3><chan><c4>]:15 <ctcp> <text> <comments>
CTCPREPLYSELF  <c3>> <c2>reply<c4> [<c3><nick><c4>]:15 <ctcp> <parentext> <comments>

NOTICE  <c4>-(<c3><nick><c4>!<c2><address><c4>)-15 <text>
NOTICECHAN  <c4>-(<c3><nick><c4>!<c2><target><c4>)-15 <text>
NOTICESELF !script %:echo   $+ %::c3 $+ >  $+ %::c2 $+ $iif(@* iswm %::target,wall,notice) $+  $+ %::c4 [ $+ %::c3 $+ $iif($ial(%::target),$ial(%::target).nick,%::target) $+  $+ %::c4 $+ ]:15 %::text %:comments
NOTICESELFCHAN !script %:echo   $+ %::c3 $+ >  $+ %::c2 $iif(@* iswm %::target,wall,notice) $+  $+ %::c4 [ $+ %::c3 $+ %::chan $+  $+ %::c4 $+ ]: $+ 15 %::text%:: %:comments
NOTICESERVER !script %:echo   $+ %::c4 $+ : $+ %::c2 $+ >00 %::server $+ 14:15 $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) $+  %:comments

NOTIFY <pre> <c2>Signon<c4>: 00<nick> <c4>[<c2><address><c4>] 15is 00Online <parentext>
UNOTIFY <pre> <c2>Signoff<c4>: 00<nick> <c4>[<c2><address><c4>] 15is Offline <parentext>

ECHO <pre> <text>
ECHOTARGET <pre> 00<text>
ERROR <pre> <c2>Error<c4>:15 <text>


LISTBEGIN !script cfusion.listbegin
LISTSEP !script cfusion.listsep
LISTTEXT !script cfusion.listtext
LISTEND !script cfusion.listend

raw.311 !script cfusion.whoisstart
raw.319 !script cfusion.whoischan
raw.312 !script cfusion.whoisserver
raw.301 !script cfusion.whoisaway
raw.338 !script cfusion.whoistrue
raw.317 !script cfusion.whoisidle
raw.307 !script cfusion.whoisreg
raw.378 !script cfusion.whoisrealhost
raw.313 !script cfusion.whoisoper
raw.318 !script cfusion.whoisend

raw.314 !script cfusion.whoisstart
raw.369 !script cfusion.whoisend

raw.332 !script cfusion.topic
raw.333 !script cfusion.endtopic

raw.001
raw.002 !script cfusion.raw.001
raw.003  <c4>:<c2>>  00 Created   14:15 <value>
raw.004 !script cfusion.raw.004
raw.005 !script %:echo   $+ %::c4 $+ : $+ %::c2 $+ >  00 Protocols 14:15 $replace(%::text,are supported by this server,,are available on this server,)

raw.250  <c4>:<c2>>  00 Highest     14:15 <value> is most clients connected
raw.251 !script cfusion.lusersstart
raw.252  <c4>:<c2>>  00 Operators 14:15 <value> operators online
raw.253  <c4>:<c2>>  00 Unknown   14:15 <value> unknown connections
raw.254  <c4>:<c2>>  00 Channels  14:15 <value> channels formed
raw.255 !script cfusion.raw.255
raw.265 !script %:echo   $+ %::c4 $+ : $+ %::c2 $+ >   00Local users 14:15 %::users $+ 14,00 Max14:15 %::value 14[15 $+ $cfusion.perc(%::users,%::value) full14]
raw.266 !script cfusion.lusersend

raw.352 !script %:echo %::pre  $+ %::c3 $+ %::cmode $+  $+ %::c2 $+ %::nick 14(15 $+ %::address $+ 14) -15 %::realname 14-15 %::server 14-15 %::value hops %:comments
raw.315 <pre> <c2>End15 of who14:00 <value>

raw.302 <pre> <c2>Userhost<c4>:00 <nick> 14(15<address>14) <comments>
raw.341 <pre> <c2>Invite<c4>:00 <nick> 15was invited to join14: [15<chan>14] <comments>
raw.324 <pre> <c2>Modes<c4>:15 on00 <chan>14: [15<modes>14] <comments>
raw.329 !script %:echo %::pre  $+ %::c2 $+ Created $+ %::c4 $+ :15 $asctime(%::text) $+  %:comments
raw.391 !script %:echo %::pre  $+ %::c2 $+ Time $+ %::c4 $+ :15 $asctime($ctime(%::text)) $+  %:comments

;motd stuff
raw.375  <c4>:<c2>>00 Message of the day14:
raw.372  <c4>:<c2>>  15 <text>
raw.376

;away message
raw.306 <pre> <c2>Away<c4>:15 you are now set away! <comments>

;/list stuff
raw.416 <pre> <c2>Error<c4>:15 listing output is too large! search truncated. <comments>
raw.323 <pre> <c2>List<c4>:15 end of channel list! <comments>

;basic error messages
raw.263 <pre> <c2>Error<c4>:15 server load is too heavy, please try again in a bit. <text> -- <value> <comments>
raw.401 <pre> <c2>Error<c4>:15 no such nick14: 00<nick> <comments>
raw.402 <pre> <c2>Error<c4>:15 no such nick/server14: 00<nick> <comments>
raw.403 <pre> <c2>Error<c4>:15 no such channel14: 00<chan> <comments>
raw.404 <pre> <c2>Error<c4>:15 cannot send to channel14: 00<chan> <comments>
raw.406 <pre> <c2>Error<c4>:15 there was no such nick14: 00<nick> <comments>
raw.421 !script %:echo %::pre  $+ %::c2 $+ Error $+  $+ %::c4 $+ :15 invalid command14:00 $lower(%::value) $+  %:comments
raw.432 <pre> <c2>Error<c4>:15 invalid nickname14: 00<nick> <comments>
raw.433 <pre> <c2>Error<c4>:15 nickname is already in use14: 00<nick> <comments>
raw.441 <pre> <c2>Error<c4>:00 <nick>15 is not on14: 00<chan> <comments>
raw.442 <pre> <c2>Error<c4>:00 you14(15<nick>14)15 are not on14: 00<chan> <comments>
raw.443 <pre> <c2>Error<c4>:00 <nick>15 is already on14: 00<chan> <comments>
raw.467 <pre> <c2>Error<c4>:15 cannot join14: 00<chan> 14[15key required, +k14] <comments>
raw.471 <pre> <c2>Error<c4>:15 cannot join14: 00<chan> 14[15channel is full, +l14] <comments>
raw.473 <pre> <c2>Error<c4>:15 cannot join14: 00<chan> 14[15invite required, +i14] <comments>
raw.474 <pre> <c2>Error<c4>:15 cannot join14: 00<chan> 14[15you're banned, +b14] <comments>
raw.475 <pre> <c2>Error<c4>:15 cannot join14: 00<chan> 14[15invalid key, +k14] <comments>
raw.482 <pre> <c2>Error<c4>:15 you're not a channel operator on14: 00<chan> <comments>

;knock stuff
raw.711 <pre> <c2>Knock<c4>:15 you have knocked on 00<chan> <comments>
raw.712 <pre> <c2>Knock<c4>:15 your knock was not delivered to 00<chan> 14[15too many knocks by user14] <comments>

;names list
raw.353 !script cfusion.names
raw.366 !script cfusion.endnames

raw.other !script %:echo %::pre $+  $+ %::c1 $iif(%::nick != $gettok(%::text,1,32) || %::chan != $gettok(%::text,1,32), $+ %::c3 $+ $ifmatch $+  $+ %::c4 : $+ %::c1) %::text $+  %:comments


[scheme1]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,164,164 0,121,121 0,213,213 128,128,128 208,208,208

[scheme2]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 234,0,0 157,0,0 255,79,79 128,128,128 208,208,208

[scheme3]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 230,60,217 150,24,140 234,140,230 128,128,128 208,208,208

[scheme4]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 208,208,208 128,128,128 255,255,255 128,128,128 208,208,208

[scheme5]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 120,235,44 78,169,16 174,243,129 128,128,128 208,208,208

[scheme6]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,128,0 202,101,0 255,193,132 128,128,128 208,208,208

[scheme7]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 249,249,0 206,206,0 255,255,168 128,128,128 208,208,208

[scheme8]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 238,128,230 227,81,217 245,201,243 128,128,128 208,208,208

[scheme9]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 253,126,0 215,0,0 244,227,104 128,128,128 208,208,208

[scheme10]
IMAGEBUTTONS
IMAGECHAN
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 71,104,70 80,74,61 33,135,84 128,128,128 208,208,208