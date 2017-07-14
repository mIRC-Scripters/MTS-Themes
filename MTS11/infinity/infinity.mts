[mts]
Name infinity 
Author [-infinity-]
Email webman@infinityscript.cjb.net
Website http://infinityscript.8m.com
Description Infinity Script's Offical Theme
Version 0.1
MTSVersion 1.1
 
Script infinity.mrc

Timestamp ON
TimestampFormat 13[2 h:nnp 13]
 
BaseColors 0,0,0,0
Colors 12,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,12,00,12,00,11
RGBColors 255,255,255 0,0,0 0,100,200 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 1,75,137 100,180,250 128,128,128 208,208,208
 
FONTDEFAULT Tahoma,10
FONTCHAN Tahoma,11
FONTQUERY Tahoma,10
 
CLineOwner 01
CLineOP 00
CLineHOP 00
CLineVoice 15
CLineRegular 15
CLineMe 01
CLineFriend 02
CLineEnemy 04
CLineIrcOP 05
 
CLineCharOwner 02.
CLineCharOP 11@
CLineCharHOP 11%
CLineCharVoice 13+
 
Prefix 13·2 ·13 ·
 
TextChan 13<cmode>2<nick>13. <text>
TextChanSelf 13<cmode>2<me>13.13 <text>
ActionChan * 13<cmode>2<nick>0 <text>
ActionChanSelf * 13<cmode>2<me>13 <text>
NoticeChan 13- (2<nick>13 . 2<chan>13) -0 <text>
Notice 13- (2<nick>13) - 0 <text>
NoticeSelf 13- (2<nick>13) 0<text>
NoticeSelfChan 13- (2<nick>13 . 2<chan>13) -0 <text>
TextQuery 2<nick>13.0 <text>
TextQuerySelf 13<me>2.0 <text>
ActionQuery * 2<nick>0 <text>
ActionQuerySelf * 13<me>0 <text>
TextMsg 2<nick>13.0 <text>
TextMsgSelf 13<me>2.0 <text>
 
Mode <pre> 13(2<nick>13) 13changes <chan> modes (2<modes>13)
ModeUser <pre> 13usermodes set to (2<modes>13)
Join <pre> 2 <nick> 13has joined 2<chan>
JoinSelf <pre> 13joining.. 2<chan>
Part <pre> 2 <nick> 13has left2 <chan>
Kick <pre> 2<knick> 13was kicked by 2<nick> 13(2<text>13)
KickSelf <pre> 13you were kicked from 2<chan> 13by 2<nick>13 (2<text>13)
Quit <pre> 2<nick> 13has quit IRC (2<text>13)
Topic <pre> 13topic (2<text>13) set by 2<nick>
Nick <pre> 2<nick>13 is now known as 2<newnick>
NickSelf <pre> 13you are now know as 2<newnick>
Invite <pre> 2<nick> 13has invited you to join 2<chan>
ServerError <pre> 13error (2<text>13)
Rejoin <pre> 13rejoining (2<chan>13)
Ctcp <pre> 13ctcp (2<nick>13 . 2<ctcp>) 13(2<text>13)2
CtcpChan <pre> 13ctcp (2<nick>13 . 2<ctcp>) 13(2<text>13)2
CtcpSelf <pre> 13ctcp (2<nick>13 . 2<ctcp>) 13(2<text>13)2
CtcpChanSelf <pre> 13ctcp (2<nick>13 . 2<ctcp>) 13(2<text>13)2
CtcpReply <pre> 13ctcp reply (2<nick>13 . 2<ctcp>) 13(2<text>13)2
CtcpReplySelf <pre> 13ctcp reply (2<nick>13 . 2<ctcp>) 13(2<text>13)2
Notify <pre> 2<nick> 13(2<text>13) is on IRC
UNotify <pre> 2<nick> 13(2<text>13) has left IRC
NoticeServer <pre> 13server notice (2<text>13)
Whois !Script infinity.whois

Load !Script infinity.load
Unload !Script infinity.unload
 
RAW.Other <pre> 0<text>
RAW.001 <pre> 13now connected!
RAW.002 <pre> 13server (2<server>13) . version (2<value>13)
RAW.003 <pre> 13server created on (2<value>13)
RAW.005 <pre> 13protocols supported by this server (2<text>13)
RAW.221 <pre> 13current usermode for 2<nick>13 (2<modes>13)
RAW.250 <pre> 13total connections (2<value>13)
RAW.251 <pre> 13there are 2<users> 13users . 2<text>13 invisible . 2<value>13 servers
RAW.252 <pre> 13operators (2<value>13)
RAW.253 <pre> 13unknown connections (2<value>13)
RAW.254 <pre> 13there are 2<value> 13channels
RAW.255 <pre> 13local clients (2<users>13) . 13servers (2<value>13)
RAW.265 <pre> 13local users (2<users>13) . 13max (2<value>13)
RAW.266 <pre> 13global users (2<users>13) . 13max (2<value>13)
RAW.302 <pre> 13userhost (2<nick> . <address> . <value> 13)
RAW.315 <pre> 13end of /who (2<value>13)
RAW.324 <pre> 13channel modes (2<modes>13)
RAW.332 !Script blind.topic
RAW.333 !Script blind.topica
RAW.341 <pre> 2<nick>13 was invited to 2<chan>
RAW.352 <pre> 2<nick> <address> <cmode> <away> <chan> <wserver> <realname> <value> <text> <isoper>
RAW.353 <pre> 2<chan> 13names (2<text>13)
RAW.366 <pre> 13end of names list (2<chan>13)
RAW.372 <pre> 2<text>
RAW.375 <pre> 13message of the day
RAW.376 <pre> 13end of message of the day
RAW.391 <pre> 13time/date (2<text>13)
 
RAW.401 <pre> 13 no such nickname (2<nick>13)
RAW.403 <pre> 13 no such channel (2<chan>13)
RAW.404 <pre> 13 unable to send message (2<chan>13)
RAW.421 <pre> 13 invalid command (2<value>13)
RAW.432 <pre> 13 invalid nickname (2<nick>13)
RAW.433 <pre> 13 nickname is in use (2<nick>13)
RAW.471 <pre> 13 channel full (2<chan>13)
RAW.473 <pre> 13 channel invite only (2<chan>13)
RAW.474 <pre> 13 banned from channel (2<chan>13)
RAW.475 <pre> 13 channel key required (2<chan>13)
RAW.482 <pre> 13 you don't have op (2<chan>13)
 
