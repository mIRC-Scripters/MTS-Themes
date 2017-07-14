; Suggestions can be e-mailed to Jagfire@mIRCscripts.org
; Helpful comments are appreciated
[mts]
Name Enigma
Author Jagfire
Email Jagfire@mIRCscripts.org
Website jagfire.mIRCscripts.org
Description Timestamped, uses Tahoma or Verdana, black background with a few schemes. Schemes vary in color, some in font and background color.
Version 0.1
MTSVersion 1.1
Script enigma.mrc

Timestamp ON
TimestampFormat 12[13h11:13nn12]

Scheme1 Green
Scheme2 Red
Scheme3 Light
Scheme4 Yellow
Scheme5 Small
Scheme6 Verdana
Scheme7 White
Scheme8 Verdana\White
Scheme9 OCRB
Scheme10 Tiny

BaseColors 01,15,11,13
Colors 01,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,0,1,0,15
RGBColors 255,252,255 0,0,0 0,0,128 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 0,140,144 88,172,248 0,124,232 176,212,255 184,180,184 208,204,208

FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

CLineOP 11
CLineHOP 11
CLineVoice 13
CLineRegular 15
CLineMe 00
CLineFriend 12
CLineEnemy 12
CLineIrcOP 00

Prefix 15·12·11·
PARENTEXT 13(15<text>13)

TextChan (11<cmode>13<nick>) 15<text>
TEXTCHANSELF (11<cmode>13<me>) 15<text>
ACTIONCHAN 00› 11<cmode>11<nick> 15<text>
ACTIONCHANSELF 00› 11<cmode>11<me> 15<text>
NOTICECHAN 00› Notice0: 0(13<nick>0\14<target>0) 15<text>
Notice 00› Notice0: 0(13<nick>0) 15<text>
NOTICESELF 00› Notice0: 0(13<target>0\14Sent0) 15<text>
NOTICESELFCHAN 00› Notice0: 0(13<target>0\14<me>0) 15<text>
TEXTQUERY (13<nick>) 15<text>
TEXTQUERYSELF (13<me>) 15<text>
ACTIONQUERY 00› 14<nick> 15<text>
ACTIONQUERYSELF 00› 14<me> 15<text>
TextMsg 00› Message0: 0(13<nick>0) 15<text>
TEXTMSGSELF 00› Message0: 0(13<nick>0\14Sent0) 15<text>

MODE <pre> Mode0: 0(13<nick>0\14<modes>0)
MODEUSER <pre> Usermode0: 0(13<me>0\14<modes>0)
JOIN <pre> Joins0: 0(13<nick>0\14<chan>0) 0(11<address>0)
JOINSELF <pre> Joins0: 0(13<me>0\14<chan>0)
PART <pre> Parts0: 0(13<nick>0\14<chan>0) <text> 0(11<address>0)
KICK <pre> Kicked0: 0(13<knick>0 by 14<nick>0) <text>
KickSelf <pre> Kicked0: 0(13<me>0 by 14<nick>0) <text>
QUIT <pre> Quit0: 0(13<nick>0) 0(13<text>0) 0(11<address>0)
TOPIC <pre> Topic0: 0(13<nick>0/14<chan>0) <text>
NICK <pre> Nick0: 0(13<nick>0—14<newnick>0)
NICKSELF <pre> Nick0: 0(13<nick>0—14<newnick>0)
Invite <pre> Invite0: 0(13<chan>0\14<nick>0)
SERVERERROR <pre> Error0: 0(13<text>0)
REJOIN <pre> Rejoining 0<chan>..
CTCP <pre> CTCP0: 0(13<nick>0\14<ctcp> <text>0)
CTCPCHAN <pre> CTCP0: 0(13<nick>0\14<chan>0\14<ctcp> <text>0)
CTCPSELF <pre> CTCP Sent0: 0(13<nick>0\14<ctcp> <text>0)
CTCPCHANSELF <pre> CTCP Sent0: 0(13<chan>0\14<ctcp> <text>0)
CTCPREPLY <pre> Reply0: 0(13<nick>0\14<ctcp> <text>0)
CTCPREPLYSELF <pre> Reply Sent0: 0(13<nick><chan>0\14<ctcp> <text>0)
NOTIFY <pre> Online0: 0(13<nick>0)
UNOTIFY <pre> Offline0: 0(13<nick>0)
WALLOP <pre> Wallop0: 0(13<text>0)
NOTICESERVER 00› Notice0: 0(13<nick>0) 15<text>

DNS <pre> 11/dns15ing 0<nick><address>...
DNSERROR <pre> 11/dns15ing 0failed.
DNSRESOLVE <pre> 11/dns15ing resolved: 0(14<iaddress>0\14<raddress>0)
Echo <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> Error0: <text>
Load <pre> 11E12n13ig12m11a loaded.
Unload <pre> 11E12n13ig12m11a unloaded.

RAW.311 !Script enigma.w
RAW.314 <pre> 13<nick> 0(11<address>0\15<realname>0)
RAW.319 !Script enigma.c
RAW.312 <pre> 13Server0: 0(11<wserver>0)
RAW.301 !Script enigma.a
RAW.313 <pre> 13<nick>0: 0(15<operline>0)
RAW.330 !Script enigma.login
RAW.317 !Script enigma.i
RAW.338
RAW.318 !Script enigma.w2
RAW.369 !Script enigma.w2
Whois
Whowas !Script enigma.w2

RAW.Other <pre> <text>
RAW.306 <pre> You 0(11<me>0) are now away.
RAW.002 <pre> Server0: 0(11<server>0\15<value>0)
RAW.003 <pre> Server0: 0(11Created0 on 15<value>0)
RAW.250 <pre> Server0: 0(11Connections0\15<value>0)
RAW.251 <pre> Server0: 0(11<users> users0)
RAW.252 <pre> Server0: 0(11IRCops0\15<value>0)
RAW.254 <pre> Server0: 0(11Channels0\15<value>0)
RAW.265 <pre> Users0: 0(11<users> local0\15<value> max0)
RAW.266 <pre> Users0: 0(11<users> global0\15<value> max0)
RAW.324 <pre> Modes0: 0(11<chan>0) <modes>
RAW.332 <pre> Topic0: 0(11<chan>0) <text>
RAW.333 <pre> Set0: 0(11<chan>0) <nick> - <text>
RAW.341 <pre> Invited0: 0(11<chan>0) <nick>
RAW.353 <chan> <text>
RAW.372 <pre> MOTD0: 0(11<text>0)

RAW.401 <pre> Error0: 0(11<nick> isn't online0)
RAW.403 <pre> Error0: 0(11<chan> isn't a channel0)
RAW.404 <pre> Error0: 0(11Can't send message to <chan>0)
RAW.421 <pre> Error0: 0(11<value> isn't a command0)
RAW.432 <pre> Error0: 0(11<nick> isn't online0)
RAW.433 <pre> Error0: 0(11<nick> is being used0)
RAW.471 <pre> Error0: 0(11<chan> is full0)
RAW.473 <pre> Error0: 0(11<chan> is +i, invite only0)
RAW.474 <pre> Error0: 0(11You're banned from <chan>0)
RAW.475 <pre> Error0: 0(11<chan> requires a key0)
RAW.482 <pre> Error0: 0(11You're not an OP in <chan>0)


[Scheme1]
RGBColors 255,252,255 0,0,0 0,0,128 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 0,140,144 0,236,144 24,196,0 72,236,0 128,124,128 208,204,208


[Scheme2]
RGBColors 255,252,255 0,0,0 0,0,128 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 0,140,144 255,108,16 255,180,80 255,60,16 184,180,184 208,204,208


[Scheme3]
RGBColors 255,252,255 0,0,0 0,0,128 160,252,255 255,0,0 128,0,0 255,244,144 255,124,0 255,252,0 0,252,0 0,140,144 208,252,232 232,252,224 255,228,176 184,180,184 208,204,208


[Scheme4]
RGBColors 255,252,255 0,0,0 0,0,128 0,140,0 255,0,0 255,140,32 160,0,160 255,124,0 255,212,64 0,252,0 0,140,144 255,252,64 255,228,48 255,196,112 184,180,184 208,204,208


[Scheme5]
FontDefault Tahoma,-7
FontQuery Tahoma,-7
FontChan Tahoma,-7


[Scheme6]
FontDefault Verdana,10
FontQuery Verdana,10
FontChan Verdana,9


[Scheme7]
RGBColors 0,20,0 255,252,255 0,0,128 0,140,0 16,0,184 128,0,0 96,0,255 0,124,200 216,84,0 0,180,32 0,140,144 16,0,200 0,124,232 0,92,184 120,116,120 0,0,0


[Scheme8]
RGBColors 0,20,0 255,252,255 0,0,128 0,140,0 16,0,184 128,0,0 96,0,255 0,124,200 216,84,0 0,180,32 0,140,144 16,0,200 0,124,232 0,92,184 120,116,120 0,0,0

FontDefault Verdana,10
FontQuery Verdana,10
FontChan Verdana,10
[Scheme9]
FontDefault OCRB,11
FontQuery OCRB,11
FontChan OCRB,11
[Scheme10]
FontDefault "Small Fonts",9
FontQuery "Small Fonts",9
FontChan "Small Fonts",9
