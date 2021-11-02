CREATE TABLE IF NOT EXISTS `commentaire` (
  `id_news` int(11) NOT NULL,
  `id_com` int(11) NOT NULL auto_increment,
  `pseudo` text NOT NULL,
  `com` text NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  PRIMARY KEY  (`id_com`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `membres_tbl` (
  `id` int(11) NOT NULL auto_increment,
  `login` varchar(40) NOT NULL,
  `PASSWORD` varchar(40) NOT NULL,
  `mail` varchar(40) NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `ID_2` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;

INSERT INTO `membres_tbl` (`id`, `login`, `PASSWORD`, `mail`) VALUES
(1, 'admin', 'admin', 'admin@admin.com');

CREATE TABLE IF NOT EXISTS `news` (
  `id` mediumint(9) NOT NULL auto_increment,
  `titre` text NOT NULL,
  `contenu` text NOT NULL,
  `timestamp` bigint(20) NOT NULL default '0',
  `timestamp_modif` bigint(20) NOT NULL default '0',
  `importance` varchar(3) NOT NULL,
  PRIMARY KEY  (`id`),
  FULLTEXT KEY `titre` (`titre`,`contenu`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;