[MTS]
NAME NULL
AUTHOR p0rt
EMAIL
DESCRIPTION | - NULL - |
WEBSITE
MTSVERSION 1.1
VERSION 
Script NULL.mrc

PARENTEXT 8<text>

UNLOAD --------[ 1NULL ]--------[Unloaded]--------
LOAD --------[ 1NULL ]--------[Loaded]--------

CTCPSELF -----------[ 10Sent Ctcp : 9** 7<nick> 14<ctcp> 15<text>
CTCPCHANSELF -----------[ 10Ctcp : 9**  14<chan> 14<ctcp> 15<text>
CTCPREPLYSELF -----------[ 10Ctcp : 9** 14<chan> 14<ctcp> 15<parentext>
MODE 5Modes 7** 14<nick> 5sets mode 15** 14<modes>

JOINSELF 15Joining 7** 15<chan>

PART 15Parts 12** 15<nick> 7\ 15<address> 15<parentext>

TEXTCHAN 7<cmode>4<nick><pre> 15<text>
TEXTQUERY 7<cmode>4<nick><pre> 15<text>
TEXTCHANSELF 7<cmode>14<me><pre> 15<text>
TEXTQUERYSELF 7<cmode>14<me><pre> 15<text>

KICK 5Kick 7** 0<knick> 4from 7** 14<chan> 5was kicked by 14** 15<nick> 15<text>
KICKSELF 12You've been kicked by 7** 14<nick> 5from 12<chan> 15<text>
QUIT 4Quit 7** 14<nick> 7\ 15<address> 7\ 5<parentext>
TOPIC 4Topic 7** 14<nick> 2sets topic to 7** 15<text>
NICK 4Nick 7** 14<nick> 2is now known as 15<newnick>
MODEUSER 4Modes 7** 14<modes>
INVITE 10Invite 7** 5<nick> 2has invited you to join 7<chan>
NICKSELF 2You are now known as 12<newnick>

CTCP -----------[ 6Received CTCP from : 7** 14<nick> 12<ctcp> 12<parentext>
CTCPCHAN -----------[ 6CTCP from : 7** 15<nick> 12<ctcp> 12<parentext>
CTCPREPLY 6!script ctcp.rep %::nick %:6:CTCP3 %::15text
SERVERERROR 4Error 7** 2<text>

NOTICESERVER 5Notice 7** 5<nick> 15<text>
NOTICE 6Notice 7** 6<nick> 15<text>
NOTICECHAN 6ChanNotice 7** 1<nick> 7\ 4<chan> 15<text>
NOTICESELF 6<nick> 7\ 6<text>
NOTICESELFCHAN 4<chan> 7\ 4<text>

NOTIFY !script notify.on %::nick %::text
UNOTIFY !script notify.off %::nick %::text

DNS <pre> 4Up 7** 15<address>
DNSERROR <pre> 6Unable to resolve 15<iaddress> 7\ 11<naddress>
DNSRESOLVE <pre> 6Resolved 11<naddress> 11<iaddress> 4to 11<raddress>

ACTIONCHAN 13<cmode>4<nick><pre> 15<text>
ACTIONQUERY 13<nick><pre> 15<text>
ACTIONCHANSELF 13<cmode> 14<me><pre> 15<text>
ACTIONQUERYSELF 13<me><pre> 15<text>

ECHO 4<text>
ECHOTARGET 4<text>
ERROR 4<text>

CLINEOP 14
CLINEHOP 4
CLINEVOICE 7
CLINEREGULAR 9
CLINEOWNER 4
CLINEENEMY 4
CLINEFRIEND 9
CLINEME 12>>
CLINECHAROP 7 @
CLINECHARHOP 8 %
CLINECHARVOICE 7 +
CLINECHARREGULAR 15 -

RAW.250 6Total connection(s) 14** 8<value>
RAW.251 6Users 14** 14<users> Invisible 7** 14<value>
RAW.252 6Operator(s) online 14** 14<value>
RAW.253 6Unknown connection(s) 14** 14<value>
RAW.254 6Number of channels formed 14** 14<value>
RAW.255 6Local clients 14** 14<users> 4on 7** 14<value> 4server(s)
RAW.265 6Local users 14** 14<users> 4Max 7** 14<value>
RAW.266 6Global users 14** 14<users> 4Max 7** 14<value>

RAW.301 6Away 7** 14<text>
RAW.302 6Userhost 14** 14<nick> 15<address>
RAW.305 15you've set back
RAW.306 15you've set away
RAW.307 15Registered nick 7** 14<nick>
RAW.311 6whois 14** 17<nick> 15<address> 9<realname>
RAW.312 6server : 11<wserver>
RAW.313 15TypeUser 7** 14<ircop> 2an IRC Operator

RAW.314 !script return
Whowas !script NULL.whowas

RAW.317 6signed on : 16<signontime>
RAW.319 6channels : <chan>
RAW.324 6modes : 16<modes>
RAW.329 6created on : 15<text>

RAW.332 !script return
Topic !script NULL.topic

RAW.333 6Set by 14** 14<nick> 2on <text>
RAW.352 15<nick> 16is 15<address> 9<realname>

RAW.369 !script return
Whois !script NULL.whois

RAW.381 15You are now a 14IRC Operator 2<me>
RAW.391 6Date 14** 14<date>

RAW.401 15No such nickname 7** 14<nick>
RAW.403 15No such nickname 7** 14<chan>
RAW.404 15Unable to send message's to 7** 14<chan>
RAW.405 15you're on too many channels to join 15<chan>
RAW.406 15<nick> 5there was no such nick
RAW.421 6Invalid command 14** 14<text>
RAW.432 15<nick> 5invalid nickname
RAW.433 6Nickname 14\ 4<nick> 6is already in 4use
RAW.436 15<nick> 5nickname collision
RAW.438 6wait 20s and try again
RAW.439 6wait 20s and try again
RAW.441 15<nick> 5is not on 15<chan>
RAW.442 15<chan> 5you're not there
RAW.443 15<nick> 5is already on 15<chan>
RAW.461 15<nick> 5more parameters needed
RAW.465 6banned from the server
RAW.467 6Can't join 14** 14<chan> 5requires key 4[+k4]
RAW.471 15<chan> 5cannot join 4[5+l4]
RAW.472 15<text> 5unknown character 
RAW.473 15<chan> 5cannot join 4[5+i4]
RAW.474 6Can't join 14** 14<chan> 5you're banned 4[+b4]
RAW.475 15<chan> 5cannot join. 4[5wrong key4]
RAW.478 15<text> 5cannot be banned. ban list is full

RAW.482 6<chan> 14** 14You're not an operator

RAW.666 !script return
Topic !script NULL.names

NOTONCHAN 15You Need To Be On Achannel

FONTDEFAULT Courier,713,0,0
FONTCHAN Courier,713,0,0
FONTQUERY Courier,713,0,0

scheme1 Null
scheme2 GraveStone
scheme3 h0aX
scheme4 Gator
scheme5 inteligent Life #2
scheme6 2011

[scheme1]
ImageChan
ImageStatus
ImageButtons 
ImageToolbar

PREFIX 14>

TIMESTAMP ON
TIMESTAMPFORMAT 11<7HH:nn]ss11>

COLORS 0,6,4,7,2,3,4,3,3,3,3,1,5,7,6,1,3,2,3,5,1,2,1,0,1,15,6,0,1,1,1,1,1,1,1,1,1
RGBCOLORS 0,0,0 245,245,245 191,0,0 91,181,87 255,83,83 255,62,62 196,196,196 245,208,82 206,206,206 206,87,0 255,128,0 220,220,200 0,255,0 0,128,255 216,216,216 192,192,192

[scheme2]
ImageChan
ImageStatus
ImageButtons 
ImageToolbar

PREFIX 14»

TIMESTAMP ON
TIMESTAMPFORMAT 12±HH:nn:ss

COLORS 0,6,4,7,2,3,4,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0 
RGBCOLORS 64,64,64 233,233,233 162,162,162 180,180,180 191,191,191 202,202,202 201,201,201 225,225,225 233,233,233 201,201,201 202,202,202 191,191,191 202,202,202 233,233,233 225,225,225 210,210,210

[scheme3]
ImageChan
ImageStatus
ImageButtons 
ImageToolbar

PREFIX 14·

TIMESTAMP ON
TIMESTAMPFORMAT 15±HH:nn:ss

COLORS 0,6,4,7,2,3,4,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0 
RGBCOLORS 64,64,64 233,233,233 194,209,231 153,177,215 125,155,204 113,147,198 124,156,203 133,163,207 146,172,211 165,186,218 143,171,211 165,187,220 179,198,225 150,180,216 163,188,220 200,215,234

[scheme4]
ImageChan
ImageStatus
ImageButtons 
ImageToolbar

PREFIX 14»

TIMESTAMP ON
TIMESTAMPFORMAT 15±HH:nn:ss

COLORS 0,6,4,7,2,3,4,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0 
RGBCOLORS 64,64,64 233,233,233 159,186,131 173,197,150 193,211,175 217,227,206 158,169,114 172,182,135 183,192,152 196,203,171 204,210,183 218,222,203 181,188,169 201,206,193 226,228,222 243,244,242

[scheme5]
ImageChan
ImageStatus
ImageButtons 
ImageToolbar

PREFIX 14»

TIMESTAMP ON
TIMESTAMPFORMAT 15±HH:nn:ss

COLORS 0,6,4,7,2,3,4,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0 
RGBCOLORS 64,64,64 233,233,233 159,164,153 165,168,159 167,171,163 170,174,166 174,177,171 182,185,179 187,190,184 196,199,192 207,210,204 216,218,214 230,231,228 244,245,243 226,228,222 243,244,242

[scheme6]
ImageChan
ImageStatus
ImageButtons 
ImageToolbar

PREFIX 14»

TIMESTAMP ON
TIMESTAMPFORMAT 15±HH:nn:ss

COLORS 0,6,4,7,2,3,4,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0 
RGBCOLORS 203,208,211 50,55,58 61,67,71 70,77,81 83,91,96 91,101,106 100,112,117 113,126,132 74,68,53 0,0,255 255,128,0 0,255,255 0,255,0 255,255,0 255,0,0 75,84,88