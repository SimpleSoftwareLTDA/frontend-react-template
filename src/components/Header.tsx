import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppsIcon from '@mui/icons-material/Apps';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from '../contexts/LanguageContext';
import { siteConfig } from '../config/siteConfig';

export const Header = () => {
  const { mode, toggleTheme } = useThemeContext();
  const { language, setLanguage, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null,
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage as 'en' | 'pt');
    }
  };

  const handleProjectsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProjectsMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    handleProjectsMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.75)'
            : 'rgba(17, 24, 39, 0.7)',
        backdropFilter: 'saturate(120%) blur(6px)',
        WebkitBackdropFilter: 'saturate(120%) blur(6px)',
        boxShadow: 'none',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ width: '100%', px: { xs: 2, sm: 3 }, py: 1.25, minHeight: '56px !important' }}>
        {/* Left side - Language Switch */}
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleLanguageChange}
          aria-label={t('header.language')}
          sx={{
            marginRight: 'auto',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: '4px',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.04)'
                : 'rgba(255, 255, 255, 0.04)',
            padding: '4px',
            '& .MuiToggleButtonGroup-grouped': {
              margin: 0,
              border: 'none',
              borderRadius: '3px !important',
              px: 2,
              py: 0.5,
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              minWidth: '42px',
              transition: 'all 0.2s ease-in-out',
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: (theme) => theme.palette.mode === 'light' ? '#ffffff' : '#111827',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
              '&:not(.Mui-selected)': {
                backgroundColor: 'transparent',
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(0, 0, 0, 0.06)'
                      : 'rgba(255, 255, 255, 0.06)',
                },
              },
            },
          }}
        >
          <ToggleButton value="en" aria-label="English">
            EN
          </ToggleButton>
          <ToggleButton value="pt" aria-label="Portuguese">
            PT
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Right side - Controls */}
        <Box sx={{ display: 'flex', gap: 1.25, alignItems: 'center' }}>
          {/* Projects Menu (6 dots) */}
          <Tooltip title={t('header.projects')}>
            <IconButton
              onClick={handleProjectsMenuOpen}
              aria-label="projects menu"
              sx={{
                color: 'text.primary',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(15, 118, 110, 0.08)'  // teal-800 with transparency
                      : 'rgba(52, 211, 153, 0.08)', // teal-400 with transparency
                  color: 'primary.main',
                  borderColor: 'primary.main',
                },
              }}
            >
              <AppsIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProjectsMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  minWidth: '260px',
                  borderRadius: '12px',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#ffffff' : '#111827',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  p: 1,
                },
              },
            }}
          >
            {siteConfig.header.projects.map((project) => (
              <MenuItem
                key={project.name}
                onClick={() => handleProjectClick(project.url)}
                sx={{
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: 'text.primary',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'rgba(0, 0, 0, 0.06)'
                        : 'rgba(255, 255, 255, 0.06)',
                    color: 'primary.main',
                  },
                }}
              >
                {project.name}
              </MenuItem>
            ))}
          </Menu>

          {/* GitHub Link */}
          <Tooltip title={t('header.github')}>
            <IconButton
              href={siteConfig.header.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              sx={{
                color: 'text.primary',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: 'transparent',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(15, 118, 110, 0.08)'  // teal-800 with transparency
                      : 'rgba(52, 211, 153, 0.08)', // teal-400 with transparency
                  color: 'primary.main',
                  borderColor: 'primary.main',
                },
                '&:visited': {
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                    borderColor: 'primary.main',
                  },
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          {/* Theme Toggle */}
          <Tooltip title={t('header.toggleTheme', { mode: mode === 'light' ? 'dark' : 'light' })}>
            <IconButton
              onClick={toggleTheme}
              aria-label="toggle theme"
              sx={{
                color: 'text.primary',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(15, 118, 110, 0.08)'  // teal-800 with transparency
                      : 'rgba(52, 211, 153, 0.08)', // teal-400 with transparency
                  color: 'primary.main',
                  borderColor: 'primary.main',
                },
              }}
            >
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
