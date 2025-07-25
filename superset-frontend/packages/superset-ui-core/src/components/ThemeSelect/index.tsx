/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Tooltip } from 'antd';
import { Dropdown, Icons } from '@superset-ui/core/components';
import { t } from '@superset-ui/core';
import { ThemeAlgorithm, ThemeMode } from '../../theme/types';

export interface ThemeSelectProps {
  setThemeMode: (newMode: ThemeMode) => void;
  tooltipTitle?: string;
  themeMode: ThemeMode;
}

const ThemeSelect: React.FC<ThemeSelectProps> = ({
  setThemeMode,
  tooltipTitle = 'Select theme',
  themeMode,
}) => {
  const handleSelect = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  const themeIconMap: Record<ThemeAlgorithm | ThemeMode, React.ReactNode> = {
    [ThemeAlgorithm.DEFAULT]: <Icons.SunOutlined />,
    [ThemeAlgorithm.DARK]: <Icons.MoonOutlined />,
    [ThemeMode.SYSTEM]: <Icons.FormatPainterOutlined />,
    [ThemeAlgorithm.COMPACT]: <Icons.CompressOutlined />,
  };

  return (
    <Tooltip title={tooltipTitle} placement="bottom">
      <Dropdown
        menu={{
          items: [
            {
              key: ThemeMode.DEFAULT,
              label: t('Light'),
              onClick: () => handleSelect(ThemeMode.DEFAULT),
              icon: <Icons.SunOutlined />,
            },
            {
              key: ThemeMode.DARK,
              label: t('Dark'),
              onClick: () => handleSelect(ThemeMode.DARK),
              icon: <Icons.MoonOutlined />,
            },
            {
              key: ThemeMode.SYSTEM,
              label: t('Match system'),
              onClick: () => handleSelect(ThemeMode.SYSTEM),
              icon: <Icons.FormatPainterOutlined />,
            },
          ],
        }}
        trigger={['click']}
      >
        {themeIconMap[themeMode] || <Icons.FormatPainterOutlined />}
      </Dropdown>
    </Tooltip>
  );
};

export default ThemeSelect;
