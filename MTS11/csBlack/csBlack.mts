[mts]
; Theme information
Name csBlack
Author Jooles
EMail m0nkey_mafia@hotmail.com
Website http://www.smellybin.net/chickensoup.zip
Description Standard chickensoup black theme
Version 1.4b
MTSVersion 1.1
SCRIPT csBlack.mrc
 
Colors 01,06,04,07,12,03,03,07,14,10,03,15,12,07,06,02,07,10,03,12,10,01,02,01,15,14
RGBColors 255,255,255 0,0,0 128,128,192 0,148,0 255,0,0 128,0,0 255,128,128 255,128,64 255,255,0 0,252,0 0,148,144 0,255,255 128,128,255 255,0,255 128,128,128 208,212,208
 
Parentext (15<text>)
Prefix 7›15>
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn
 
ACTIONCHAN * <nick> <text>
ACTIONCHANSELF * <me> <text>
ACTIONQUERY * <nick> <text>
ACTIONQUERYSELF * <me> <text>
CTCP --> [15<nick> <ctcp>]15 <text>
CTCPCHAN --> [15<nick>:15<chan> <ctcp>]15 <text>
CTCPSELF <-- [15<nick> <ctcp>]15 <text>
CTCPCHANSELF <-- [15<nick>:15<chan> <ctcp>]15 <text>
JOIN  <pre> 07Joins:15 <nick> 07(15<address>07) <parentext>
JOINSELF 15Now talking in 14<chan>
KICK <pre> Kicks:15 <nick> kicked <knick> (15<text>)
KICKSELF <pre> Kicks:15 You were kicked from <chan> by <nick> ! the bastard! (15<text>)
MODE <pre> 10Mode:15 <nick> sets mode 10(15<modes>10)
MODEUSER <pre> 10Mode:15 Usermode 10(15<modes>10)
NICK <nick> is now known as <newnick>
NICKSELF Your new nickname is now <newnick>
NOTICE -(15<nick>)-15 <text>
NOTICECHAN -(15<nick>)(15<chan>)-15 <text>
NOTICESELF -(15<me>)-15 <text>
NOTICESELFCHAN  -(15<me>)(15<chan>)-15 <text>
PART <pre> 07Parts:15 <nick> 07(15<address>07) <parentext>
QUIT <pre> Quits:15 <nick> (15<address>) <text>
TEXTCHAN 10(<cmode><nick>10) <text>
TEXTCHANSELF 10(<cmode><me>10) <text>
TEXTQUERY 10(<nick>10) <text>
TEXTQUERYSELF 10(<me>10) <text>

DNS 15DNS Info for:14 <naddress> (<address>)
DNSERROR 15DNS Info for:14 <naddress> (<iaddress>).
DNSRESOLVE 15DNS resolved tor:14 <raddress>

RAW.301 14...10( 15Away7;14 <text>
RAW.307 14...10( 15Registered7;14 <nick> is a registered nickname
RAW.311 !script cs.whois.start %::nick %::address %::realname
RAW.312 14...10( 15Server7;14 <wserver> (<serverinfo>)
RAW.317 !script cs.whois.idle %::nick %::idletime %::signontime
RAW.318 1410( 15/w end14 <nick> 10)____________________14____________________
RAW.319 14...10( 15Channels7;14 <chan>
RAW.330 14...10( 15Authed7;14 <nick> authed as <aname>
RAW.366 !script cs.endnames

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
 
CLineCharOwner 07.
CLineCharOP 15@
CLineCharHOP 02%
CLineCharVoice 10+
 
CLineMe 02
CLineOwner 07
CLineOp 15
CLineHOp 02
CLineVoice 10
CLineRegular 14
 
ImageButtons dynamic.bmp
;ImageChan photo funkymonkey.jpg
IMAGESTATUS center funkymonkey.jpg
TextMsg 10(<nick>10) <text>
TextMsgSelf 10(<me>10) <text>
Topic <pre> Topic:15 <nick> (15<text>)
 
CtcpReply --> [15<nick> <ctcp>REPLY]15 <text>
CtcpReplySelf <-- [15<nick> <ctcp>REPLY]15 <text>
 
