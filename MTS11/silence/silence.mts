[mts]
Name Silence
Author Decalc
EMail micro@netmadeira.com
Website n/a
Description Silence script default theme
Version 1.1
MTSVersion 1.1
 
COLORS 1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,0,1,3,3,6,2
BASECOLORS 02,12,11,01
RGBCOLORS 255,255,255 102,102,102 0,128,192 0,175,255 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,175,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT verdana,11
FONTCHAN verdana,11
FONTQUERY verdana,11
 
CLINEOP 00
CLINEHOP 00
CLINEVOICE 00
CLINEREGULAR 00
CLINEOWNER 00
CLINEENEMY 04
CLINEFRIEND 07
CLINEME 03
 
Prefix 0:3:0:
ParenText (<text>)
 
TextChan 3(<cmode><nick>)0 <text>
TextChanSelf 3(0<cmode><nick>3)0 <text>
ActionChan 3! <nick>0 <text>
ActionChanSelf 3! <me>0 <text>
NoticeChan 3» <nick><target>0- <text>
Notice 3» [0Notice3] <nick>0: <text>
NoticeSelf 3» <nick>0: <text>
NoticeSelfChan 3» <chan>0 <text>
TextQuery 3(<nick>)0 <text>
TextQuerySelf 3(0<me>3)0 <text>
ActionQuery 3! <nick>0 <text>
ActionQuerySelf 3! <me>0 <text>
Mode <pre> 3<nick>0 sets mode:3 <modes>
ModeUser <pre> 3You0 set modes:3 <modes>
Join <pre> 0[3»0] <nick> has joined <chan> [3<address>0]
JoinSelf <pre> 3You0 have joined <chan>...
Part <pre> 0[3«0] <nick> has left <chan> [3<address>0]
Kick <pre> 0[3««0] <knick> was kicked by <nick> (3<text>0)
KickSelf <pre> 3You0 were kicked from <chan> by <nick>: 3<text>
Quit <pre> 0[3v0] <nick> has quit IRC. (3<text>0)
Topic <pre> 3<nick>0 changes topic to: 3<text>
Nick <pre> 3<nick>0 is now known as 3<newnick>
NickSelf <pre> 3You0 are now known as 3<newnick>
Invite <pre> 0You were invited to join <chan> by <nick>
ServerError <pre> 3Error:0 <text>
Rejoin <pre> 0Attempting to rejoin...
Ctcp 3» CTCP[0<nick>/<ctcp>3]0 - <text>
CtcpChan 3» CTCP[0<nick>:<chan>/<ctcp>3]0 - <text>
CtcpSelf 3» CTCP[0<nick>/<ctcp>3]0 - <text>
CtcpChanSelf 3» CTCP[0<chan>/<ctcp>3]0 - <text>
CtcpReply 3» CTCPReply[0<nick>/<ctcp>3]0 - <text>
CtcpReplySelf 3» CTCPReply[0<nick>/<ctcp>3]0 - <text>
Notify <pre> 3<nick>0 is online <parentext>
Unotify <pre> 3<nick>0 is offline <parentext>
NoticeServer <pre> 3[0<nick>3]0 <text>
DNS <pre> 0[3DNS0 on: <address>]
DNSError <pre> 0[3DNS0 failed]
DNSResolve <pre> 0[3DNS0 resolved to: <raddress>]

Script silence.mrc

raw.305 <pre> 0You're now marked as back.
raw.306 <pre> 0You're now marked as away.
RAW.311 !Script silence.whois
RAW.319 !Script silence.wchans
RAW.312 » 3Server:0 <wserver> | <serverinfo>
RAW.301 » 3Away:0 <text>
RAW.307 » 3Registered
RAW.313 » 3<nick> is an IRC Operator
RAW.317 !Script silence.widle
RAW.324 <pre> 3Channel modes:0 <modes>
RAW.332 <pre> 3Topic:0 <text>
RAW.333 <pre> 3Topic set by 0<nick> 3on 0<text>
RAW.250 <pre> 3Total connections:0 <value>
RAW.252 <pre> 3Opers:0 <value>
RAW.253 <pre> 3Unknown connections:0 <value>
RAW.254 <pre> 3Channels:0 <value>
RAW.255 !Script silence.lusersend
RAW.401 <pre> 0No such nickname:3 <nick>
RAW.403 <pre> 0No such channel:3 <chan>
RAW.404 <pre> 0Cannot send text to 3<chan>
RAW.421 <pre> 3<value>0 is an invalid command
RAW.432 <pre> 3<nick>0 is an invalid nickname
RAW.433 <pre> 3<nick>0 is already in use
RAW.471 <pre> 3<chan>0 is currently full
RAW.473 <pre> 3<chan>0 is invite only
RAW.474 <pre> 0Cannot join 3<chan>0. You are banned
RAW.475 <pre> 0Cannot join 3<chan>0. Need channel key
RAW.482 <pre> 0You are not opped on 3<chan>
RAW.251 !Script silence.lusers
RAW.318 0¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
RAW.329 <pre> 3Created on:0 <text>

Echo <pre> <text>
Echotarget <pre> <text>
Error 4Error:0 <text>
 
Scheme1 GreenBG
Scheme2 Silver

[scheme1]
COLORS 1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,1,3,3,1,1
RGBCOLORS 0,255,255 0,47,45 0,128,192 0,147,147 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,175,255 0,0,255 255,0,255 128,128,128 208,208,208

[scheme2]
COLORS 1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,1,3,3,1,1
RGBCOLORS 255,255,255 81,101,128 0,128,192 166,190,255 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,175,255 0,0,255 255,0,255 128,128,128 208,208,208